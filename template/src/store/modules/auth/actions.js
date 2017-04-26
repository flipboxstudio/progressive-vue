import { FETCH_PROFILE } from '@/store/modules/profile/types'
import { AUTHENTICATE, SET_FORM_LOADING, SET_TOKEN } from './types'

const guid = () => {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}

export default {
  [AUTHENTICATE] ({ commit, dispatch }) {
    return new Promise(function (resolve, reject) {
      commit(SET_FORM_LOADING, true)

      commit(SET_TOKEN, guid())

      dispatch(FETCH_PROFILE).then(() => {
        commit(SET_FORM_LOADING, false)

        resolve()
      }, () => {
        reject(new Error())
      })
    })
  }
}
