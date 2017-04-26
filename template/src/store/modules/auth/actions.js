import { AUTHENTICATE, SET_STATE } from './types'
import { FETCH_PROFILE } from '@/store/modules/profile/types'

function guid () {
  function sequence () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  return sequence() + sequence() + '-' +
         sequence() + '-' +
         sequence() + '-' +
         sequence() + '-' +
         sequence() + sequence() + sequence()
}

export default {
  [AUTHENTICATE] ({ commit, dispatch }) {
    return new Promise(function (resolve, reject) {
      commit(SET_STATE, {accessor: 'form.loading', value: true})

      commit(SET_STATE, {accessor: 'token', value: guid()})

      dispatch(FETCH_PROFILE).then(() => {
        commit(SET_STATE, {accessor: 'form.loading', value: false})

        resolve()
      }, () => {
        reject(new Error())
      })
    })
  }
}
