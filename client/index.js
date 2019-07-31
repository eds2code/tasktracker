import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import App from './App.vue';
import './index.html';

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({ el: '#app', ...App });
});
