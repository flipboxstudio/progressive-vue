import Vue from 'vue'
import Vuex from 'vuex'

// Base
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// Modules
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    profile
  }
})
