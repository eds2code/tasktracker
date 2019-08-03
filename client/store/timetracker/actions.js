/* eslint no-param-reassign: "error" */

import getHhMmSsFromTimestamp from '../../helpers/get_hhmmss_from_timestamp';
import types from './mutations_types.js';

export default {
  createTask: ({ commit }, {
    title = 'Таск без названия',
    isStarted = false,
    startDateTime = new Date(),
    duration = 0,
    durationLimit = undefined,
  }) => {
    const id = Number(String(Math.random()).substr(2));
    const task = {
      id, title, startDateTime, duration, isStarted, durationLimit,
    };
    commit(types.CREATE_TASK, task);
  },

  deleteTask: ({ commit }, task) => {
    commit(types.DELETE_TASK, task);
  },

  resetTasks: ({ commit }) => {
    commit(types.SET_TASKS, []);
  },

  updateTask: ({ commit, dispatch }, task) => {
    commit(types.UPDATE_TASK, task);
    dispatch('saveTasks');
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

  saveTasks: ({ state }) => {
    window.localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
};
