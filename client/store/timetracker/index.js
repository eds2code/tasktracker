import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: {
    tasks: [],
    reportText: '',
  },

  actions,
  mutations,
  getters,
};
