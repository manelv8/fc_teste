import Vue from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VueMask from 'v-mask';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueMask)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
