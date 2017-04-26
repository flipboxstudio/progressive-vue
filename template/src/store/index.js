import Vue from 'vue'
import Vuex from 'vuex'

// Base
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// Modules
import auth from './modules/auth'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
  modules: {
    auth,
    profile
  }
})
