import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import App from './App.vue';
import createStore from './store';

import './assets/css/tachyons.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './index.html';

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({
    el: '#app',
    store: createStore(),
    ...App,
  });
});
