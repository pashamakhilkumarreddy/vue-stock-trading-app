import Vue from 'vue';
import VueMeta from 'vue-meta';
import {
  sync,
} from 'vuex-router-sync';

import App from './App.vue';
import router from './routes';
import store from './store';

import './registerServiceWorker';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './assets/styles/main.scss';

sync(store, router);
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
