import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Chapters from '@/components/Chapters'
import ChapterOne from '@/components/ChapterOne'
import ChapterTwo from '@/components/ChapterTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chapters',
      name: 'Chapters',
      component: Chapters
    },
    {
      path: '/chapter/1',
      name: 'ChapterOne',
      component: ChapterOne
    },
    {
      path: '/chapter/2',
      name: 'ChapterTwo',
      component: ChapterTwo
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    } else {
      if (to.hash) {
        return {
          selector: to.hash,
          offset: {x: 0, y: 70}
        }
      } else {
        return {
          offset: {x: 0, y: 0}
        }
      }
    }
  }
})
