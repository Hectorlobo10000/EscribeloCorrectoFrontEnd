<template>
  <v-app id="inspire">

    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" @click="navigateTo(item.link)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Escribelo Correcto</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center align-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      drawer: false,
      items: [
        { icon: 'home', text: 'Home', link: '/' },
        { icon: 'class', text: 'Capítulos', link: '/chapters' },
        { icon: 'contact_mail', text: 'Contactenos', link: '/' },
        { icon: 'comment', text: 'Déjanos tu comentario', link: '/' }
      ]
    }),
    methods: {
      navigateTo: function (nav) {
        this.$router.push(nav)
        this.drawer = false
      }
    }
  }
</script>