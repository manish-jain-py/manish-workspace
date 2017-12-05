import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: '',
    warehouse: 'Not Selected'
  },
  mutations: {
    setPageTitle (state, title) {
      state.pageTitle = title
    },
    setWarehouse (state, location) {
      state.warehouse = location
    }
  }
})
