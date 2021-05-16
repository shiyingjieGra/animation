// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'font-awesome/css/font-awesome.min.css'

import less from 'less'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Buefy)
Vue.use(less)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()

let instance = null
function render (props = {}) {
  const { container } = props

  instance = /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
