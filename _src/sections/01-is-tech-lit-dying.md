---
title: Is tech literacy dying?
order: 1
image: img/kidtech.jpg
image_alt: A youth disassembling an Apple Monitor.
image_credit: Photo by Dave Michael, via Unsplash
---
Section that introduces:
- people having access to technology at younger ages
- the idea that despite this, kids and young adults appear to have less knowledge on how their devices function
- use the file directory example from the article

<is-land on:visible>

  <div id="counter" v-scope="{ count: 0 }">
    <p>Count: <span v-text="count"></span></p>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
  </div>

  <template data-island>
    <script type="module">
      import { createApp } from './js/petite-vue.js'
      createApp().mount('#counter')
    </script>
  </template>

</is-land>
