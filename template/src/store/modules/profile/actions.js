import { http } from '@/app'
import { SET_FORM_LOADING, SET_PROFILE, FETCH_PROFILE } from './types'

export default {
  [FETCH_PROFILE] ({ commit }) {
    return new Promise((resolve, reject) => {
      commit(SET_FORM_LOADING, true)

      http.get('https://randomuser.me/api/').then(function (data) {
        commit(SET_PROFILE, data.data.results[0])

        resolve(data.data.results[0])

        commit(SET_FORM_LOADING, false)
      }, function (error) {
        reject(error)

        commit(SET_FORM_LOADING, false)
      })
    })
  }
}
