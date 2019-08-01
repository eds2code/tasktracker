import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: {
    tasks: window.localStorage.tasks ? JSON.parse(window.localStorage.tasks) : [],
    reportText: '',
  },

  actions,
  mutations,
  getters,
};
