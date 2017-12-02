import Vue from 'vue'
import VueRouter from 'vue-router'
import menuPage from '../components/menu-page.vue'
import samplePage from '../components/sample-page.vue'

const routes = [
  {
    path: '/menu',
    name: 'MainMenuPage',
    component: menuPage
  },
  {
    path: '/sample',
    name: 'SamplePage',
    component: samplePage
  }
]

const router = new VueRouter({
  routes
})

export default router

