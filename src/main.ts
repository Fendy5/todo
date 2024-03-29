import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'
import '@/styles/index.scss'
import '@/permission'
import '@/assets/icons'

Vue.config.productionTip = false
window.Pusher = require('pusher-js')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
