import * as TYPES from './types'

export default {
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
  },

  [TYPES.SET_FORM_LOADING] (state, formState) {
    state.form.loading = formState
  },

  [TYPES.SET_FIRSTNAME] (state, value) {
    state.name.first = value
  },

  [TYPES.SET_LASTNAME] (state, value) {
    state.name.last = value
  },

  [TYPES.SET_EMAIL] (state, value) {
    state.email = value
  },

  [TYPES.SET_PHONE] (state, value) {
    state.phone = value
  }
}
