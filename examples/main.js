import Vue from 'vue'
import App from './App.vue'
import router from './router'
import XcoooUI from '../packages'

Vue.config.productionTip = false
Vue.use(XcoooUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
