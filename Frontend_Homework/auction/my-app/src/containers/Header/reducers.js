import {GET_USER_FAILED,
        GET_USER_START,
        GET_USER_SUCCESS} from "./actions";

const initialState = {
    name: '',
    account: 0,
    ownLots: [],
    bettedLots: []
}

export default function userReducer(state = initialState, {type, payload}) {

    switch(type){
        case GET_USER_START:
            return {
                ...state,
                pending: true
            }

        case GET_USER_SUCCESS:
            return {
                ... state,
                pending: false,
                data: payload
            }

        case GET_USER_FAILED:
            return {
                ... state,
                pending: false,
                error: payload
            }
    }

    return {
        data: null,
        pending: false,
        error: null
    }
}