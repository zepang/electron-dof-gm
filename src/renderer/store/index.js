import Vue from 'vue'
import Vuex from 'vuex'
import selections from './selections'

Vue.use(Vuex)

const state = {
  isDrawerShow: false
}

const mutations = {
  switchDrawer (state, boolean) {
    state.isDrawerShow = boolean
  }
}

const actions = {
  switchDrawer ({ state, commit }, boolean) {
    if (boolean === undefined) {
      boolean = !state.isDrawerShow
    }
    commit('switchDrawer', boolean)
  }
}

const getters = {
  
}

const modules = {
  selections
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})