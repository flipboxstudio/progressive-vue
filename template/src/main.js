// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './sw'
import './http'
import Vue from 'vue'
import './materialize'
import App from './App'
import store from './store'
import router from './router'
import VeeValidate from 'vee-validate'
import MdForm from './components/MdForm'
import PageContent from './components/PageContent'
import MdFormContent from './components/MdFormContent'
import MdFormSection from './components/MdFormSection'

Vue.use(VeeValidate)

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  Vue.config.warn = false
  Vue.config.debug = false
  Vue.config.silent = true
  Vue.config.devtools = false
}

Vue.component('page-content', PageContent)
Vue.component('md-form', MdForm)
Vue.component('md-form-content', MdFormContent)
Vue.component('md-form-section', MdFormSection)

var root = new Vue({
  el: '#app',
  store,
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
