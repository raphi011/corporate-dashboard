import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './configureStore';

const store = configureStore(undefined);
const history = syncHistoryWithStore(browserHistory, store);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./routes', render);
}
