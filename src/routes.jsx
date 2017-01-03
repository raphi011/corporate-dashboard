import * as React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Metrics from './components/Metrics';
import Branches from './components/Branches';
import Issues from './components/Issues';

const routes = (
  <Route path="/" component={App}>
    <Route path="/metrics" component={Metrics} />
    <Route path="/issues" component={Issues} />
    <Route path="/branches" component={Branches} />
  </Route>
);

export default routes;
