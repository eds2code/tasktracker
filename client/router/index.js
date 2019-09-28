import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';
import Home from '../pages/Home';
import Timetracker from '../pages/Timetracker';

export default new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'timetracker', path: '/timetracker', component: Timetracker },
  ],
}).create();
