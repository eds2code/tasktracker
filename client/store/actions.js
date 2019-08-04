/* eslint no-param-reassign: "error" */

import types from './mutations_types.js';

export default {
  toggleModal: ({ commit }, modalComponentName = '') => {
    commit(types.SET_CURRENT_MODAL_COMPONENT_NAME, modalComponentName);
  },
};
