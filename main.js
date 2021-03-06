import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './plugins/global'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// import '@/plugins/global'
import { i18n } from '@/utils/i18n'
import setting from '@/settings'
const lang = Cookies.get('i18nLan') || setting.lang
// const lang = localStorage.getItem('i18nLan') || setting.lang

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${i18n.t(to.meta.title)}`
  }
  next()
})

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */

Vue.use(Element, (lang === 'en') ? { locale } : '')

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
