import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: ''
  },
  mutations: {
    setCurrentPage (state, pageId) {
      state.currentPage = pageId
    }
  }
})
