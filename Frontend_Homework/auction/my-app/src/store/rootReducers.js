import { combineReducers } from 'redux'
import userReducer from '../containers/LotPage/reducers'
import lotsReducer from '../containers/Account/reducers'

export default combineReducers({
  userState: userReducer,
  lotsState: lotsReducer 
})