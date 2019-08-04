/* eslint no-param-reassign: "error" */

import types from './mutations_types.js';

export default {
  [types.SET_CURRENT_MODAL_COMPONENT_NAME]: (state, modalComponentName) => {
    state.currentModalComponentName = modalComponentName;
  },
};
