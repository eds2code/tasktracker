/* eslint no-param-reassign: "error" */

import types from './mutations_types.js';

export default {
  [types.SET_CURRENT_USER]: (state, user = {}) => {
    state.currentUser = user;
  },
  [types.SET_CURRENT_ERROR]: (state, errorText = '') => {
    state.currentError = errorText;
  },
  [types.INCREMENT_USER_REQUESTS_COUNTER]: (state) => {
    state.userRequestsCounter += 1;
  },
  [types.DECREMENT_USER_REQUESTS_COUNTER]: (state) => {
    state.userRequestsCounter -= 1;
  },
};
