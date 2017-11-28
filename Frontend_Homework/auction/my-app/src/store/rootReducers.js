import { combineReducers } from 'redux'
import lotsState from '../containers/CardHolder/reducers'
import userState from '../containers/Header/reducers'

export default combineReducers({
  userState,
  lotsState
})