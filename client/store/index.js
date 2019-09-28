import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import timetracker from './timetracker';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentModalComponentName: '',
  },

  actions,
  mutations,
  getters,

  modules: {
    user,
    timetracker,
  },
});
