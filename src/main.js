import Vue from 'vue'
import Head from 'vue-head';
import router from './router';
import vuetify from './plugins/vuetify';
import App from './App.vue';
require('dotenv').config();

Vue.config.productionTip = false;

if (!localStorage.getItem('uid')) {
  const uid = new Date().getTime().toString(16) + Math.floor(10000*Math.random()).toString(16);
  localStorage.setItem('uid', uid);
}

Vue.use(Head);

new Vue({
  router,
  vuetify,
  render: h => h(App),
  head: {
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id='+process.env.VUE_APP_GA_ID,
        async: true,
      },
      {
        inner: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '"+ process.env.VUE_APP_GA_ID +"');"
      },
    ]
  }
}).$mount('#app')
