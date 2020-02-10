import Vue from 'vue';
import App from './App.vue'
import ace from 'ace-builds'
import componentsInstall from './install.vue'
 
Vue.use(ace)
Vue.use(componentsInstall)
new Vue({
  el: '#app',
  render: h => h(App),
});
