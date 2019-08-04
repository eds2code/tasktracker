import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: {
    userRequestsCounter: 0,
    currentError: '',
    currentUserId: Meteor.userId(),
    currentUser: undefined,
  },

  actions,
  mutations,
  getters,
};
