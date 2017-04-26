import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import NotFound from '@/pages/error/404'
import Dashboard from '@/pages/Dashboard'
import MdAppLayout from '@/components/MdAppLayout'
import { IS_AUTHENTICATED } from '@/store/modules/auth/types'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: MdAppLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard
        },

        {
          path: '/profile',
          name: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        allowAnonymous: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.allowAnonymous) {
    return next(true)
  }

  const redirect = (store.getters[IS_AUTHENTICATED]) ? true : '/login'

  return next(redirect)
})

export default router
