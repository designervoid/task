import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    SET_DATA: (state, payload) => {
      state.data.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
