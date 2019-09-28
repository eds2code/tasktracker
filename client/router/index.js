import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';
import Home from '../pages/Home.vue';
import Timetracker from '../pages/Timetracker.vue';

export default new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'timetracker', path: '/timetracker', component: Timetracker },
  ],
}).create();
