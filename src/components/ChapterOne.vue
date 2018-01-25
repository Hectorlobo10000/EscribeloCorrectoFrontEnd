<template>
  <v-container id="contentchapter">
    <v-card color="grey lighten-5" flat>
      <v-layout row>
        <v-flex xs12 offset-xs0>
          <v-card class="card--flex-toolbar">
            <v-toolbar card color="white" prominent>
              <v-toolbar-title class="body-2 grey--text" v-if="true">{{ body[0].main_theme}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom left>
                <v-btn icon slot="activator">
                  <v-icon>apps</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile  v-for="item in body[0].content" :key="item.text" @click="">
                    <!--v-list-tile-title href="#" v-scroll-to="item.link">{{ item.text }}</v-list-tile-title-->
                    <v-list-tile-title><router-link to="/chapter/1#elabecedarioespanol">funnciono</router-link></v-list-tile-title>
                    </v-list-tile>
                </v-list>
              </v-menu>
            </v-toolbar>
            <v-divider></v-divider>
            <v-container>
              <v-card-text>
                <div class="mb-5">
                  
                  <h2 class="display-1 mb-3" v-bind:id="body[1].el">{{ body[1].text }}</h2>
                  <p v-for="item in body[1].content" :key="item.id">
                    <vue-markdown :source="item.text"></vue-markdown>
                  </p>

                  <h2 class="display-1 mb-3" v-bind:id="body[2].el">{{ body[2].text }}</h2>
                  <p v-for="item in body[2].content" :key="item.id">
                    <vue-markdown :source="item.text"></vue-markdown>
                  </p>
                  <h2 class="display-1 mb-3" v-bind:id="body[3].el">{{ body[3].text }}</h2>
                  <p v-for="item in body[3].content" :key="item.id">
                    <vue-markdown :source="item.text"></vue-markdown>
                  </p>
                  <h2 class="display-1 mb-3" v-bind:id="body[4].el">{{ body[4].text }}</h2>
                  <p>
                    <vue-markdown :source="body[4].content[0].text"></vue-markdown>
                  </p>
                  <div>
                    <v-data-table v-bind:headers="body[4].content[0].headers" :items="body[4].content[0].items"  class="elevation-1">
                    <template slot="items" slot-scope="props">
                      <td>{{ props.item.name }}</td>
                      <td class="text-xs-right"><vue-markdown :source="props.item.upper_case"></vue-markdown></td>
                      <td class="text-xs-right"><vue-markdown :source="props.item.lower_case"></vue-markdown></td>
                      <td class="text-xs-right"><vue-markdown :source="props.item.sound"></vue-markdown></td>
                    </template>
                    </v-data-table>
                  </div>
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
    items: [
      { text: 'Conceptos de gramática', link: '#conceptosdegramatica' },
      { text: 'Ortografía', link: '#ortografia' },
      { text: 'El abecedario español', link: '#elabecedarioespanol' },
      { text: 'Formas y nombres del alfabeto', link: '#formasynombresdelalfabeto' }
    ],
    body: []
  }),
  created () {
    this.axios.get('https://apiec.herokuapp.com/api/chapter/1').then(response => {
      this.body = response.data
    })
  },
  methods: {
    navigateTo: function (ref) {
      this.$router.push(this.$route.path + ref)
    }
  }
}
</script>