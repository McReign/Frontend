// import { GET_CURRENT_USER, UPDATE_MONEY} from "./actions";
// import { fromJS } from 'immutable';

// export function userReducer(state, {type, payload}) {

//   switch(type){
//     case GET_CURRENT_USER:
//       return state.set('user', {name: 'Ilya', money: 100})
//     case UPDATE_MONEY:
//       return state.setIn(['user', 'money'], payload)
//   }

//   return fromJS({user: null})
// }