'use strict';

import { combineReducers } from 'redux';

import buildInfo from 'reducers/buildInfoReducer';
import serverStatus from 'reducers/sensorDataReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  buildInfo,
  serverStatus,
  routing: routerReducer
});