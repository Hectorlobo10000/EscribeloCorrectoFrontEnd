// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import VueMarkdown from 'vue-markdown'
import VueSocialSharing from 'vue-social-sharing'

Vue.use(Vuetify)
Vue.use(VueAxios, Axios)
Vue.use(VueSocialSharing)

Vue.component('vue-markdown', VueMarkdown)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
