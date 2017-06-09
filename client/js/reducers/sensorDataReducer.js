'use strict';

import types from 'actions/types';

export default function reducer(state = {
  checking: false,
  success: false,
  error: null,
  sensors: null,
  usage: null
}, action) {

  switch (action.type) {
    case types.GET_SENSOR_DATA: {
      return {
        ...state,
        checking: true
      }
    }
    case types.GET_SENSOR_DATA_FAIL: {
      return {
        ...state,
        checking: false,
        error: action.payload.message
      }
    }
    case types.GET_SENSOR_DATA_SUCCESS: {
      return {
        ...state,
        checking: false,
        success: true,
        sensors: action.payload
      }
    }
    case types.GET_USAGE_DATA: {
      return {
        ...state,
        checking: true
      }
    }
    case types.GET_USAGE_DATA_FAIL: {
      return {
        ...state,
        checking: false,
        error: action.payload.message
      }
    }
    case types.GET_USAGE_DATA_SUCCESS: {
      return {
        ...state,
        checking: false,
        success: true,
        usage: action.payload
      }
    }    
  }
  return state;  
}
