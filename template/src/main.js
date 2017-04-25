// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import App from './App'
import store from './store'
import router from './router'

Vue.use(app)

var root = new Vue({
  el: '#app',

  store,

  router,

  template: '<App ref="app"/>',

  components: { App },

  mounted () {
    if ((process.env.NODE_ENV !== 'production')) {
      return
    }

    const themes = ['md-theme-default', 'md-theme-white']

    themes.forEach(function (themeName) {
      const el = document.querySelector(`#${themeName}`)

      el.innerHTML = el.innerHTML.replace(/THEME_NAME/g, themeName)
    })
  },

  methods: {
    toggleSidenav () {
      this.$refs['app'].$refs['main-sidebar'].toggle()
    },

    closeSidenav () {
      this.$refs['app'].$refs['main-sidebar'].close()
    }
  }
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
