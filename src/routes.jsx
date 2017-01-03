import * as React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Metrics from './components/Metrics';

const routes = (
  <Route path="/" component={App}>
    <Route path="/metrics" component={Metrics} />
  </Route>
);

export default routes;
