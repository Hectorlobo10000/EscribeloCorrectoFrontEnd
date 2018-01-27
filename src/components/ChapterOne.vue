<template>
  <v-container id="contentchapter">
    <v-card color="grey lighten-5" flat>
      <v-layout row>
        <v-flex xs12 offset-xs0>
          <v-card class="card--flex-toolbar">
            <v-toolbar card color="white" prominent>
              <v-toolbar-title class="body-2 grey--text">{{ chapterOne.mainTheme }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom left>
                <v-btn icon slot="activator">
                  <v-icon>apps</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile  v-for="item in chapterOne.subThemes" :key="item._id" @click.prevent="navigateTo(item.link)">
                    <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-toolbar>
            <v-divider></v-divider>
            <v-container>
              <v-card-text>
                <div class="mb-5">
                  <h2 class="display-1 mb-3" v-bind:id="subThemeOne.el">{{ subThemeOne.text }}</h2>
                  <p v-for="item in subThemeOne.content" :key="item._id">
                    <vue-markdown :source="item.text"></vue-markdown>
                  </p>

                  <h2 class="display-1 mb-3" v-bind:id="subThemeTwo.el">{{ subThemeTwo.text }}</h2>
                  <p v-for="item in subThemeTwo.content" :key="item._id">
                    <vue-markdown :source="item.text"></vue-markdown>
                  </p>

                  <h2 class="display-1 mb-3" v-bind:id="subThemeThree.el">{{ subThemeThree.text }}</h2>
                  <p v-for="item in subThemeThree.content" :key="item._id">
                    <vue-markdown :source="item.text"></vue-markdown>
                  </p>

                  <h2 class="display-1 mb-3" v-bind:id="subThemeFour.el">{{ subThemeFour.text }}</h2>
                  <p>
                    <vue-markdown :source="subThemeFour.contentText"></vue-markdown>
                  </p>
                  <div>
                    <v-data-table v-bind:headers="subThemeFour.headers" :items="subThemeFour.items"  class="elevation-1">
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
import axios from 'axios'
export default {
  name: 'ChapterOne',
  data: () => ({
    chapterOne: {},
    subThemeOne: {},
    subThemeTwo: {},
    subThemeThree: {},
    subThemeFour: {},
    hash: ''
  }),
  beforeRouteEnter: function (to, from, next) {
    function getContent () {
      return axios.get('https://apiec.herokuapp.com/api/chapter/1')
    }
    axios.all([getContent()]).then(axios.spread(function (content) {
      next(vm => {
        vm.setContent(content)
        vm.hash = to.hash
      })
    }))
  },
  updated () {
    this.$nextTick(function () {
      if (this.hash) {
        window.document.querySelector(this.hash).scrollIntoView()
        window.scrollTo(0, window.pageYOffset - 70)
      }
    })
  },
  methods: {
    navigateTo: function (ref) {
      this.$router.push(this.$route.path + ref)
    },
    setContent: function (response) {
      this.chapterOne = Object.assign({}, this.chapterOne, {
        mainTheme: response.data[0].main_theme,
        subThemes: response.data[0].content
      })
      this.subThemeOne = Object.assign({}, this.subThemeOne, {
        text: response.data[1].text,
        el: response.data[1].el,
        content: response.data[1].content
      })
      this.subThemeTwo = Object.assign({}, this.subThemeTwo, {
        text: response.data[2].text,
        el: response.data[2].el,
        content: response.data[2].content
      })
      this.subThemeThree = Object.assign({}, this.subThemeThree, {
        text: response.data[3].text,
        el: response.data[3].el,
        content: response.data[3].content
      })
      this.subThemeFour = Object.assign({}, this.subThemeFour, {
        text: response.data[4].text,
        contentText: response.data[4].content[0].text,
        el: response.data[4].el,
        headers: response.data[4].content[0].headers,
        items: response.data[4].content[0].items
      })
    }
  }
}
</script>