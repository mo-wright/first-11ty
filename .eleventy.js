const esbuild = require("esbuild");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/_includes/");
  eleventyConfig.addPassthroughCopy("./_src/css/");
  eleventyConfig.addPassthroughCopy("./_src/img/");
  eleventyConfig.addPassthroughCopy("./_src/threed-images/");
  eleventyConfig.addPassthroughCopy({
    "node_modules/@11ty/is-land/is-land.js": "js/is-land.js",
    "node_modules/petite-vue/dist/petite-vue.es.js": "js/petite-vue.js",
  });
  // Bundle Three.js before every 11ty build
  eleventyConfig.on("eleventy.before", async () => {
    await esbuild.build({
      entryPoints: ["_src/threeScene.js"],
      bundle: true,
      minify: true,
      format: "esm",
      outdir: "_site/js",
      sourcemap: true,
    });
  });

  // Re-run the build when the scene file changes during npm run start
  eleventyConfig.addWatchTarget("./_src/threeScene.js");
  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
};
