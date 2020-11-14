import Vue from 'vue'
import VueAnalytics from 'vue-analytics';
import router from './router';
import vuetify from './plugins/vuetify';
import App from './App.vue';
require('dotenv').config();

Vue.config.productionTip = false;

if (!localStorage.getItem('uid')) {
  const uid = new Date().getTime().toString(16) + Math.floor(10000*Math.random()).toString(16);
  localStorage.setItem('uid', uid);
}

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA_ID,
  autoTracking: {
    screenview: true
  },
  router,
});

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
