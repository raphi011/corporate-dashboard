import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import metrics from './metrics';

export default combineReducers({
  metrics,
  routing: routerReducer,
});
