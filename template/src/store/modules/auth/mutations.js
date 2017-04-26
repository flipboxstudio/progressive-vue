import * as TYPES from './types'

export default {
  [TYPES.SET_EMAIL] (state, value) {
    state.email = value
  },

  [TYPES.SET_PASSWORD] (state, value) {
    state.password = value
  },

  [TYPES.SET_TOKEN] (state, value) {
    state.token = value
  },

  [TYPES.SET_FORM_LOADING] (state, formState) {
    state.form.loading = formState
  }
}
