/* eslint no-param-reassign: "error" */

import { Tracker } from 'meteor/tracker';

import types from './mutations_types.js';
import globalTypes from '../mutations_types.js';

export default {
  initUser: ({ state, commit }) => {
    commit(types.INCREMENT_USER_REQUESTS_COUNTER);

    Tracker.autorun(() => {
      const meteorUser = Meteor.users.findOne(state.currentUserId);
      if (meteorUser) { commit(types.SET_CURRENT_USER, meteorUser); }

      commit(types.DECREMENT_USER_REQUESTS_COUNTER);
    });
  },

  createUser: ({ dispatch, commit }, user = {
    username: '',
    password: '',
    profile: {
      firstname: '',
    },
  }) => {
    commit(types.INCREMENT_USER_REQUESTS_COUNTER);

    Accounts.createUser(user, (err) => {
      if (err) {
        commit(types.SET_CURRENT_ERROR, err.reason);
      } else {
        commit(types.SET_CURRENT_ERROR, '');
        dispatch('login', user);
      }

      commit(types.DECREMENT_USER_REQUESTS_COUNTER);
    });
  },

  login: ({ commit }, user = {
    username: '',
    password: '',
  }) => {
    commit(types.INCREMENT_USER_REQUESTS_COUNTER);

    Meteor.loginWithPassword(user.username, user.password, (err) => {
      if (err) {
        commit(types.SET_CURRENT_ERROR, err.reason);
      } else {
        commit(types.SET_CURRENT_ERROR, '');
        commit(types.SET_CURRENT_USER, Meteor.user());
        commit(globalTypes.SET_CURRENT_MODAL_COMPONENT_NAME, '', { root: true });
      }

      commit(types.DECREMENT_USER_REQUESTS_COUNTER);
    });
  },

  logout: ({ commit }) => {
    commit(types.INCREMENT_USER_REQUESTS_COUNTER);

    Meteor.logout((err) => {
      if (err) {
        commit(types.SET_CURRENT_ERROR, err.reason);
      } else {
        commit(types.SET_CURRENT_ERROR, '');
        commit(types.SET_CURRENT_USER);
      }

      commit(types.DECREMENT_USER_REQUESTS_COUNTER);
    });
  },
};
