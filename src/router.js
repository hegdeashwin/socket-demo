import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from './App.js';

import Home from './Home.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home} />
      <Route path = "home" component = {Home} />
    </Route>
  </Router>
);

export default Routes;
