import { combineReducers } from 'redux'
import user from '../containers/LotPage/reducers'
import lots from '../containers/Account/reducers'

export default combineReducers({
  userState,
  lotsState
})