import Vue from 'vue';
import Vuex from 'vuex';

import timetracker from './timetracker';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    timetracker,
  },
});
