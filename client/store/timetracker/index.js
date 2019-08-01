import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const tasks = window.localStorage.tasks ? JSON.parse(window.localStorage.tasks) : [];

export default {
  state: {
    tasks,
    reportText: '',
  },

  actions,
  mutations,
  getters,
};
