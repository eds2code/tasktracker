import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

import Home from '../pages/Home';
import Timetracker from '../pages/Timetracker';
import Moneytracker from '../pages/Moneytracker';

import userRoutes from './user.js';

export default new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'timetracker', path: '/timetracker', component: Timetracker },
    { name: 'moneytracker', path: '/moneytracker', component: Moneytracker },

    ...userRoutes,
  ],
}).create();
