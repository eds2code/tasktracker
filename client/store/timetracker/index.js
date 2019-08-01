import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: {
    tasks: [
      ...JSON.parse(window.localStorage.tasks),
    ],
    reportText: '',
  },

  actions,
  mutations,
  getters,
};
