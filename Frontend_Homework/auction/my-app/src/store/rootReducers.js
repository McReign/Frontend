import { combineReducers } from 'redux'
import userState from '../containers/LotPage/reducers'
import lotsState from '../containers/Account/reducers'

export default combineReducers({
  userState,
  lotsState
})