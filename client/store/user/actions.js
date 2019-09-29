/* eslint no-param-reassign: "error" */

import { Tracker } from 'meteor/tracker';

import types from './mutations_types.js';
import globalTypes from '../mutations_types.js';

export default {
  initUser: ({ commit }) => {
    commit(types.INCREMENT_USER_REQUESTS_COUNTER);

    Tracker.autorun(() => {
      const userId = Meteor.userId();
      const meteorUser = Meteor.users.findOne(userId);
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

  updateUser: ({ state, commit }, user) => {
    const updatedUser = { ...state.currentUser, ...user };
    const backupUser = updatedUser;

    commit(types.INCREMENT_USER_REQUESTS_COUNTER);
    commit(types.UPDATE_USER, backupUser);

    Meteor.call('user.update', updatedUser, (err) => {
      if (err) {
        window.console.log(err);
        commit(types.UPDATE_USER, backupUser);
      }
      commit(types.DECREMENT_USER_REQUESTS_COUNTER);
    });
  },

  changeUserPassword: ({ commit }, { currentPw, newPw }) => {
    commit(types.INCREMENT_USER_REQUESTS_COUNTER);

    Accounts.changePassword(currentPw, newPw, (err) => {
      if (err) { window.console.log(err); }
      commit(types.DECREMENT_USER_REQUESTS_COUNTER);
    });
  },
};
