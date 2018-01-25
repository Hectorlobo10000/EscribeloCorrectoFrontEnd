<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex sm6 md6 lg6 xl6 v-for="card in cards" :key="card.chapter">
      <v-card>
        <v-card-media v-bind:src="card.src" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ card.chapter }}</h3>
            <div>{{ card.theme }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Compartir</v-btn>
          <v-btn flat color="orange" @click="navigateTo(card.link)">Explorar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Chapters',
  data: () => ({
    cards: [
      { chapter: 'Capítulo 1', theme: 'PRINCIPIOS GENERALES DE GRAMÁTICA Y ORTOGRAFÍA ESPAÑOLA', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/1' },
      { chapter: 'Capítulo 2', theme: 'ACENTUACIÓN', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/2' },
      { chapter: 'Capítulo 3', theme: 'PUNTUACIÓN', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/1' },
      { chapter: 'Capítulo 4', theme: 'ABREVIATURAS', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/1' },
      { chapter: 'Capítulo 5', theme: 'USO DE LAS LETRAS MAYÚSCULAS', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/1' },
      { chapter: 'Capítulo 6', theme: 'REGLAS ORTOGRÁFICAS', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/1' },
      { chapter: 'Capítulo 7', theme: 'APÉNDICE 1', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/1' },
      { chapter: 'Capítulo 8', theme: 'APÉNDICE 2', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/1' },
      { chapter: 'Capítulo 9', theme: 'APÉNDICE 3', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/1' },
      { chapter: 'Capítulo 10', theme: 'HONDUREÑISMOS, REGIONALISMOS, EXTRANGERIMOS', src: '/static/doc-images/carousel/pizarra1.png', link: '/chapter/1' }
    ]
  }),
  methods: {
    navigateTo: function (nav) {
      this.$router.push(nav)
    }
  }
}
</script>
