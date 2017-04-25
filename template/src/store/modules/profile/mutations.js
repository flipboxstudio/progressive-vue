import * as TYPE from './types'

export default {
  [TYPE.SET_PROFILE] (state, payload) {
    Object.assign(state, payload)
  },

  [TYPE.RESET_BASIC] (state) {
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

  [TYPE.SET_FORM_LOADING] (state, formState) {
    state.form.loading = formState
  },

  [TYPE.SET_FIRSTNAME] (state, value) {
    state.name.first = value
  },

  [TYPE.SET_LASTNAME] (state, value) {
    state.name.last = value
  },

  [TYPE.SET_EMAIL] (state, value) {
    state.email = value
  },

  [TYPE.SET_PHONE] (state, value) {
    state.phone = value
  }
}
