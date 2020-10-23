import { createStore, combineReducers } from 'redux'
import TripReducer from '../src/reducers/TripReducer'

const rootReducer = combineReducers({
    tripReducer: TripReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore;