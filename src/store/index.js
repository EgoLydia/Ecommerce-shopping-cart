import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberOfProducts: 0
  },
  mutations: {
    increaseNumberOfProducts(state){
      state.numberOfProducts++;
    }
  },
  actions: {
  },
  modules: {
  }
})
