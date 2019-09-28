import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: {
    userRequestsCounter: 0,
    currentError: '',
    currentUser: {},
  },

  actions,
  mutations,
  getters,
};
