import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import * as ROUTES from './constants/routes';

import Home from './pages/Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
    </Switch>
  </Router>
);

export default App;
