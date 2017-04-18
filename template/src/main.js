// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './sw'
import Vue from 'vue'
import './materialize'
import App from './App'
import router from './router'
import PageContent from './components/PageContent'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  Vue.config.warn = false
  Vue.config.debug = false
  Vue.config.silent = true
  Vue.config.devtools = false
}

Vue.component('page-content', PageContent)

var root = new Vue({
  el: '#app',
  router,
  template: '<App ref="app"/>',
  components: { App },
  methods: {
    toggleSidenav () {
      this.$refs['app'].$refs['main-sidebar'].toggle()
    },

    closeSidenav () {
      this.$refs['app'].$refs['main-sidebar'].close()
    }
  },
  mounted () {
    if ((process.env.NODE_ENV !== 'production')) {
      return
    }

    var themes = ['md-theme-default', 'md-theme-white']

    themes.forEach(function (themeName) {
      var el = document.querySelector(`#${themeName}`)

      el.innerHTML = el.innerHTML.replace(/THEME_NAME/g, themeName)
    })
  }
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
