import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import issues from './issues';
import branches from './branches';
import customers from './customers';

export default combineReducers({
  issues,
  customers,
  branches,
  routing: routerReducer,
});
