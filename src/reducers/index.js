import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import issues from './issues';
import branches from './branches';

export default combineReducers({
  issues,
  branches,
  routing: routerReducer,
});
