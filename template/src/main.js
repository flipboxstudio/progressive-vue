import Vue from 'vue'
import store from './store'
import router from './router'
import app from './app'
import App from './App'

Vue.use(app)

var root = new Vue({
  el: '#app',

  store,

  router,

  template: '<App ref="app" />',

  components: { App },

  mounted () {
    const themes = ['md-theme-default', 'md-theme-white']

    themes.forEach(function (themeName) {
      const el = document.querySelector(`#${themeName}`)

      if (el) {
        el.innerHTML = el.innerHTML.replace(/THEME_NAME/g, themeName)
      }
    })
  },

  methods: {
    toggleSidenav () {
      this.$refs['app'].$refs['root-view'].$refs['main-sidebar'].toggle()
    },

    closeSidenav () {
      this.$refs['app'].$refs['root-view'].$refs['main-sidebar'].close()
    }
  }
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
