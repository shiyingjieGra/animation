// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import less from 'less'

import App from './App'
import router from './router'

Vue.use(Buefy)
Vue.use(less)
Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
