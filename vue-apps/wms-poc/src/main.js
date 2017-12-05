import Vue from 'vue'
import App from './components/App.vue'
import router from './router/index.js'
import store from './components/store/'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
