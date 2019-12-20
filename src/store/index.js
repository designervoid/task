import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    not_extended_data: [],
    extended_data: []
  },
  mutations: {
    SET_NOT_EXTENDED_DATA: (state, payload) => {
      state.not_extended_data.push(payload);
    },
    SET_EXTENDED_DATA: (state, payload) => {
      state.extended_data.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
