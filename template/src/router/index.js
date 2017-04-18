import Vue from 'vue'
import Router from 'vue-router'
const Dashboard = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['@/pages/Dashboard'], () => {
    resolve(require('@/pages/Dashboard'))
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
