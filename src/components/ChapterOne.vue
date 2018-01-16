<template>
  <v-container>
    <v-card color="grey lighten-5" flat>
      <v-layout row>
        <v-flex xs12>
          <v-card class="card--flex-toolbar">
            <v-toolbar card color="white" prominent>
              <v-toolbar-title class="body-2 grey--text">Title</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip top>
                <v-btn icon slot="activator">
                  <v-icon>apps</v-icon>
                </v-btn>
                <span>funciono</span>
              </v-tooltip>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text style="height: 405px;">contenido</v-card-text>
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
    theme: {},
    paragraph: [{}],
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' }
    ],
    text: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.'
  }),
  created () {
    this.$http.get('https://apiec.herokuapp.com/api/chapter/1/theme/1').then(function (data) {
      this.theme = data.body
      this.paragraph = this.theme.paragraph
    })
  }
}
</script>