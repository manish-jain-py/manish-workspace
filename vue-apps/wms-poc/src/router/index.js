import Vue from 'vue'
import VueRouter from 'vue-router'
import mainMenuPage from '../components/main-menu-page.vue'
import samplePage from '../components/sample-page.vue'
import selectWarehouse from '../components/select-warehouse.vue'
import receivingMenuPage from '../components/receiving-menu-page.vue'
import selectPO from '../components/select-po.vue'
import selectItem from '../components/select-item.vue'
import itemDetails from '../components/item-details.vue'
import response from '../components/response.vue'
import experiment from '../components/experiment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'selectWarehouse',
    component: selectWarehouse
  },
  {
    path: '/main-menu',
    name: 'MainMenuPage',
    component: mainMenuPage
  },
  {
    path: '/sample',
    name: 'SamplePage',
    component: samplePage
  },
  {
    path: '/receiving',
    name: 'ReceivingMenuPage',
    component: receivingMenuPage
  },
  {
    path: '/select-po',
    name: 'SelectPO',
    component: selectPO
  },
  {
    path: '/select-item',
    name: 'SelectItem',
    component: selectItem
  },
  {
    path: '/item-details',
    name: 'ItemDetails',
    component: itemDetails
  },
  {
    path: '/response',
    name: 'Response,',
    component: response
  },
  {
    path: '/experiment',
    name: 'Experiment',
    component: experiment
  }
]

const router = new VueRouter({
  routes
})

export default router

