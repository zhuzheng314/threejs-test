import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import * as VueThreejs from 'vue-threejs' // >= 0.2.0

Vue.use(VueThreejs)
new Vue({
  render: h => h(App),
}).$mount('#app')
