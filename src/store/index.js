import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mainStore = new Vuex.Store({
  state: {
    pageIndex: 'homepage',
    animationUrl: ''
  },
  getters: {
    getPageIndex: state => state.pageIndex,
    getAnimationUrl: state => state.animationUrl
  },
  mutations: {
    handlePageList (state, res) {
      state.pageIndex = res
    },
    handleAnimationUrl (state, res) {
      state.animationUrl = res
    }
  },
  actions: {}
})

export default mainStore
