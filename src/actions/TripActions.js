import { SET_DESTINATION_POINT, SET_ORIGIN_POINT, TOGGLE_ROUND_TRIP, SET_STARTDATE, SET_ENDDATE, SET_RETURNTRIP_ID, SET_ORIGINTRIP_ID} from './types'

export const SetOrigin = (origin) => (
  {
    type: SET_ORIGIN_POINT,
    data: origin,
  }
)

export const SetDestination = (destination) => (
  {
    type: SET_DESTINATION_POINT,
    data: destination
  }
)

export const toggleRoundTrip = () => (
  {
    type: TOGGLE_ROUND_TRIP
  }
)

export const SetStartDate = (date) => (
  {
    type: SET_STARTDATE,
    data: date,
  }
)

export const SetEndDate = (date) => (
  {
    type: SET_ENDDATE,
    data: date,
  }
)

export const SetOriginTripId = (id) => (
  {
    type: SET_ORIGINTRIP_ID,
    data: id
  }
)
export const SetReturnTripId = (id) => (
  {
    type: SET_RETURNTRIP_ID,
    data: id
  }
)