import {types} from "../types";

const initialState = {
    users:[]
}
export default function userReducer(state= initialState, action){
    switch (action.type){
        case types.HANDLE_CLICK:
            return {...state, users: action.payload}
        default:return state
    }
}