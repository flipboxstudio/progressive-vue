import './materialize'
import Vue from 'vue'
import Pace from 'pace-progress'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import MdForm from './components/MdForm'
import PageContent from './components/PageContent'
import MdFormContent from './components/MdFormContent'
import MdFormSection from './components/MdFormSection'

Vue.use(VueResource)

export const http = Vue.http

export default {
  install ($Vue, options) {
    $Vue.prototype.$pace = Pace

    $Vue.prototype.$pace.start()

    // Register serviceWorker in production
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
        .then(function (registration) {
          // Registration was successful
          console.log('Service Worker Registered')
        }, function (err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err)
        })

      navigator.serviceWorker.ready.then(function (registration) {
        // Service Worker ready :D
        console.log('Service Worker Ready')
      })
    }

    $Vue.config.productionTip = false

    if (process.env.NODE_ENV === 'production') {
      $Vue.config.warn = false
      $Vue.config.debug = false
      $Vue.config.silent = true
      $Vue.config.devtools = false
    }

    $Vue.use(VeeValidate)

    $Vue.component('page-content', PageContent)
    $Vue.component('md-form', MdForm)
    $Vue.component('md-form-content', MdFormContent)
    $Vue.component('md-form-section', MdFormSection)
  }
}
