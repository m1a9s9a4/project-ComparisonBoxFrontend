import Vue from 'vue'
import router from './router';
import vuetify from './plugins/vuetify';
import App from './App.vue';

console.log("process.env.VUE_APP_API_URL");
console.log(process.env.VUE_APP_API_URL);
Vue.config.productionTip = false;

if (!localStorage.getItem('uid')) {
  const uid = new Date().getTime().toString(16) + Math.floor(10000*Math.random()).toString(16);
  localStorage.setItem('uid', uid);
}

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
