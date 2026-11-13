---
title: Gallery
layout: base.njk
---

<is-land on:visible>

<div id="gallery" v-scope="{ active: 'all' }">
  <div class="filters">
    <button @click="active = 'all'" :class="{ on: active === 'all' }" :aria-pressed="active === 'all'">All</button>
    <button @click="active = 'nature'" :class="{ on: active === 'nature' }" :aria-pressed="active === 'nature'">Sketches</button>
    <button @click="active = 'portraits'" :class="{ on: active === 'portraits' }" :aria-pressed="active === 'portraits'">Photos</button>
    <button @click="active = 'sketches'" :class="{ on: active === 'sketches' }" :aria-pressed="active === 'sketches'">Type</button>
  </div>
  <section class="topic" v-show="active === 'all' || active === 'nature'">
    <h3>Nature</h3>
    <img src="img/nature/first.jpg" alt="A dark photograph of a forested area.">
    <img src="img/nature/second.jpg" alt="A bright photograph of a piece of limestone in a forested area.">
  </section>
  <section class="topic" v-show="active === 'all' || active === 'portraits'">
    <h3>Portraits</h3>
    <img src="img/portraits/first.jpg" alt="A stylized illustration of Will Graham from Hannibal with deer antlers and a bloodied fist.">
    <img src="img/portraits/second.jpg" alt="An illustration of bbno$ in cabaret inspired makeup.">
  </section>
  <section class="topic" v-show="active === 'all' || active === 'sketches'">
    <h3>Sketches</h3>
    <img src="img/sketches/first.jpg" alt="A sketch of Beth, Mia, and Alice from the Evil Dead movies.">
    <img src="img/sketches/second.jpg" alt="A chibi-styled sketch of vocaloid Hatsune Miku.">
  </section>
</div>

  <template data-island>
    <script type="module">
      import { createApp } from './js/petite-vue.js'
      createApp().mount('#gallery')
    </script>
  </template>

</is-land>
