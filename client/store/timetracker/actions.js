/* eslint no-param-reassign: "error" */
import { Random } from 'meteor/random';
import Tasks from '../../../imports/api/tasks.js';

import getHhMmSsFromTimestamp from '../../helpers/get_hhmmss_from_timestamp';
import types from './mutations_types.js';

export default {
  getTasks: ({ commit }) => {
    Meteor.subscribe('tasks', () => {
      const currentUserTasks = Tasks
        .find({ userId: Meteor.userId() })
        .fetch();

      console.log(currentUserTasks);
      commit(types.SET_TASKS, currentUserTasks);
    });
  },

  createTask: ({ commit }, {
    title = 'Таск без названия',
    isStarted = false,
    startDateTime = new Date(),
    duration = 0,
    durationLimit = undefined,
  }) => {
    const task = {
      _id: Random.id(),
      title,
      startDateTime: String(startDateTime),
      duration,
      isStarted,
      durationLimit,
    };

    commit(types.CREATE_TASK, task);

    Meteor.call('tasks.create', task, (err) => {
      if (err) {
        window.console.log(err);
        commit(types.DELETE_TASK, task);
      }
    });
  },

  deleteTask: ({ commit }, task) => {
    commit(types.DELETE_TASK, task);

    Meteor.call('tasks.delete', task, (err) => {
      if (err) {
        window.console.log(err);
        commit(types.CREATE_TASK, task);
      }
    });
  },

  updateTask: ({ commit }, task) => {
    commit(types.UPDATE_TASK, task);

    Meteor.call('tasks.update', task, (err) => {
      if (err) {
        window.console.log(err);
        commit(types.UPDATE_TASK, task);
      }
    });
  },

  createConfirm: (_, text) => window.confirm(text),

  resetTasks: ({ getters, dispatch }) => {
    const isApproved = dispatch('createConfirm', 'Удалить все таски?');
    if (isApproved) {
      getters.tasks.forEach((task) => {
        dispatch('deleteTask', task);
      });
    }
  },

  createReport: ({ state, commit }) => {
    commit(types.SET_REPORT_TEXT, '');

    let reportText = '';

    state.tasks.forEach((task) => {
      const formattedDuration = getHhMmSsFromTimestamp(task.duration);
      const formattedDurationLimit = getHhMmSsFromTimestamp(task.durationLimit);

      let emoji = '';

      if (task.duration > 0 && task.durationLimit > 0) {
        emoji = task.duration <= task.durationLimit ? '✅ ' : '❌ ';
      } else {
        emoji = '☝️';
      }

      reportText += `- ${task.title} [${emoji}${formattedDuration} / ${formattedDurationLimit || formattedDuration}] \r\n`;
    });

    commit(types.SET_REPORT_TEXT, reportText);
  },

  resetReport: ({ commit }) => {
    commit(types.SET_REPORT_TEXT, '');
  },
};
