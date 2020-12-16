import { SET_DESTINATION_POINT, SET_ENDDATE, SET_ORIGIN_POINT, SET_STARTDATE, TOGGLE_ROUND_TRIP, SET_ORIGINTRIP_ID, SET_RETURNTRIP_ID} from '../actions/types'

const INITIAL_STATE = {
  originPoint: {
    id: null,
    param: null,
    name: null,
    type: null,
    cityName: null,
    stateCode: null,
    match: null,
    code: null
  },
  destinationPoint: {
    id: null,
    param: null,
    name: null,
    type: null,
    cityName: null,
    stateCode: null,
    match: null,
    code: null
  },
  startDate: new Date(),
  endDate: new Date( new Date().getTime() + 60 * 60 * 24 * 1000),
  roundTrip: true,
  startTripId: null,
  returnTripId: null,
  PassengersNum: 1
};

const TripReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ORIGIN_POINT:
      return {
        ...state,
        originPoint: action.data
      }
    case SET_DESTINATION_POINT:
      return {
        ...state,
        destinationPoint: action.data
      }
    case TOGGLE_ROUND_TRIP:
      return {
        ...state,
        roundTrip: !state.roundTrip
      }
    case SET_STARTDATE:
      return {
        ...state,
        startDate: action.data
      }
    case SET_ENDDATE:
    return {
      ...state,
      endDate: action.data
    }
    case SET_ORIGINTRIP_ID:
      return {
        ...state,
        startTripId: action.data
      }
    case SET_RETURNTRIP_ID:
    return {
      ...state,
      returnTripId: action.data
    }
    default:
      return state
  }
};

export default TripReducer;