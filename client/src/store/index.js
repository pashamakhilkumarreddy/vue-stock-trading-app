import Vue from 'vue';
import Vuex from 'vuex';
import createdPersistedState from 'vuex-persistedstate';

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createdPersistedState(),
  ],
  state,
  getters,
  actions,
  mutations,
});
