import * as TYPES from './types'
import genericMutator from '@/util/generic-mutator'

export default {
  [TYPES.SET_STATE]: genericMutator,

  [TYPES.SET_PROFILE] (state, payload) {
    Object.assign(state, payload)
  },

  [TYPES.RESET_BASIC] (state) {
    Object.assign(state, {
      name: {
        title: '',
        first: '',
        last: ''
      },
      email: '',
      phone: ''
    })
  }
}
