import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from '@/components/Partials/Navbar.vue';
import Wrapper from '@/components/Partials/Wrapper.vue';
import Fragment from 'vue-fragment'


Vue.component("navbar",Navbar);
Vue.component("wrapper",Wrapper);
Vue.use(Fragment.Plugin)


Vue.config.productionTip = false

new Vue({
  router,
  
  render: h => h(App)
}).$mount('#app')
