import { combineReducers } from 'redux';
import { TOGGLE_ORIGIN_MODAL } from '../actions/types'

const INITIAL_STATE = {
  originModal: false,
  destinationModal: false,
  roundTrip: true,
  PassengersNum: 1
};

const TripReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ORIGIN_MODAL:
      return {
        ...state,
        originalModal: !state.originalModal
      }
    default:
      return state
  }
};

export default TripReducer;