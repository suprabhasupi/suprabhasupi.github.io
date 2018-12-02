// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import router from '~/router'

Vue.config.productionTip = false
Vue.performance = true

Vue.use(Vuex)

Promise.resolve(window.fetch).then(() => {
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
  // a()
})
