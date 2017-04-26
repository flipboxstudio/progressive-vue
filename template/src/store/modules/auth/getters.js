import { IS_AUTHENTICATED } from './types'

export default {
  [IS_AUTHENTICATED]: ({ token }) => token !== ''
}
