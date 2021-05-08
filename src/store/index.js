import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mainStore = new Vuex.Store({
  state: {
    pageIndex: 'homepage'
  },
  getters: {
    getPageIndex: state => state.pageIndex
  },
  mutations: {
    handlePageList (state, res) {
      state.pageIndex = res
    }
  },
  actions: {}
})

export default mainStore
