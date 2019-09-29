import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import App from './App.vue';
import store from './store';
import router from './router';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './index.html';

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    store,
    ...App,
  });
});
