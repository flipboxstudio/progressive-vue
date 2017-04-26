import { http } from '@/app'
import { SET_STATE, SET_PROFILE, FETCH_PROFILE } from './types'

export default {
  [FETCH_PROFILE] ({ commit }) {
    return new Promise((resolve, reject) => {
      commit(SET_STATE, {accessor: 'form.loading', value: true})

      http.get('https://randomuser.me/api/').then(function (data) {
        commit(SET_PROFILE, data.data.results[0])

        resolve(data.data.results[0])

        commit(SET_STATE, {accessor: 'form.loading', value: false})
      }, function (error) {
        reject(error)

        commit(SET_STATE, {accessor: 'form.loading', value: false})
      })
    })
  }
}
