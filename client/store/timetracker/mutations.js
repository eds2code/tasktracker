/* eslint no-param-reassign: "error" */

import types from './mutations_types.js';

export default {
  [types.CREATE_TASK]: (state, task) => {
    state.tasks.push(task);
  },
  [types.DELETE_TASK]: (state, task) => {
    state.tasks = state.tasks.filter(_task => _task.id !== task.id);
  },
  [types.UPDATE_TASK]: (state, task) => {
    const oldTask = state.tasks.find(_task => _task.id === task.id);
    const taskIndex = state.tasks.findIndex(_task => _task.id === task.id);

    state.tasks[taskIndex] = {
      ...oldTask,
      ...task,
    };
  },
  [types.SET_REPORT_TEXT]: (state, reportText) => {
    state.reportText = reportText;
  },
};
