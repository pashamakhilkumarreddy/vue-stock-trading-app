import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';

const PageNotFound = () => import('@/views/PageNotFound.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    name: 'index',
    alias: ['/home', '/index'],
  }, {
    path: '*',
    component: PageNotFound,
    name: 'page-not-found',
  }],
});
