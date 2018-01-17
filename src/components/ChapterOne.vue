<template>
  <v-container>
    <v-card color="grey lighten-5" flat>
      <v-layout row>
        <v-flex xs12>
          <v-card class="card--flex-toolbar">
            <v-toolbar card color="white" prominent>
              <v-toolbar-title class="body-2 grey--text">PRINCIPIOS GENERALES DE GRAMÁTICA Y ORTOGRAFÍA ESPAÑOLA</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom left>
                <v-btn icon slot="activator">
                  <v-icon>apps</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile v-for="theme in themes" :key="theme.tex" @click="navigateTo(theme.link)">
                    <v-list-tile-title>{{ theme.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
              </v-menu>
            </v-toolbar>
            <v-divider></v-divider>
            <v-container class="scroll-y" style="height: 405px;">
              <v-card-text>
                <div class="mb-5">
                  <h2 id="conceptosdegramatica" class="display-1 mb-3">{{ theme.sub_theme }}</h2>
                  <p>
                    <vue-markdown :source="paragraphs[0].text"></vue-markdown>
                  </p>
                  <span class="subheading mb-3"><vue-markdown :source="paragraphs[1].sub_theme"></vue-markdown></span>
                  <p>
                    <vue-markdown :source="paragraphs[1].text"></vue-markdown>
                  </p>
                  <p>
                    <vue-markdown :source="paragraphs[2].text"></vue-markdown>
                  </p>
                  <p>
                    <vue-markdown :source="paragraphs[3].text"></vue-markdown>
                  </p>
                  <p>
                    <vue-markdown :source="paragraphs[4].text"></vue-markdown>
                  </p>
                  <p>
                    <vue-markdown :source="paragraphs[5].text"></vue-markdown>
                  </p>
                  <h2 id="ortografia" class="display-1 mb-3">{{ theme.sub_theme }}</h2>
                </div>
              </v-card-text>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ChapterOne',
  data: () => ({
    themes: [
      { text: 'Conceptos de gramática', link: '#conceptosdegramatica' },
      { text: 'Ortografía', link: '#ortografia' },
      { text: 'El abecedario español', link: '#elabecedarioespanol' },
      { text: 'Formas y nombres del alfabeto', link: '#formasynombresdelalfabeto' }
    ],
    theme: {},
    paragraphs: [{}]
  }),
  created () {
    this.$http.get('https://apiec.herokuapp.com/api/chapter/1/theme/1').then(function (data) {
      this.theme = data.body
      this.paragraphs = this.theme.paragraph
    })
  },
  methods: {
    navigateTo: function (ref) {
      this.$router.push(this.$route.path + ref)
    }
  }
}
</script>