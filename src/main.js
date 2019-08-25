import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import 'buefy/dist/buefy.css'
import Buefy from 'buefy'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
