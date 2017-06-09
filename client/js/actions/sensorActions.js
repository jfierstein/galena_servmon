'use strict';

import axios from 'axios';
import types from 'actions/types';

export function getSensorData() {
  return function(dispatch) {
    dispatch({type: types.GET_SENSOR_DATA, payload: null});
    axios.get(`/api/sensors`)
      .then(response => {
        dispatch({type: types.GET_SENSOR_DATA_SUCCESS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: types.GET_SENSOR_DATA_FAIL, payload: err});
      });
  }
}

export function getUsageData() {
  return function(dispatch) {
    dispatch({type: types.GET_USAGE_DATA, payload: null});
    axios.get(`/api/usage`)
      .then(response => {
        dispatch({type: types.GET_USAGE_DATA_SUCCESS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: types.GET_USAGE_DATA_FAIL, payload: err});
      });
  }
}