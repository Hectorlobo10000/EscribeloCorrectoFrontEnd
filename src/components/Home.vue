<template>
  <v-carousel hide-controls>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'carousel',
  data: () => ({
    items: [
      {
        src: '/static/doc-images/carousel/pizarra1.png'
      }
    ]
  })
}
</script>

