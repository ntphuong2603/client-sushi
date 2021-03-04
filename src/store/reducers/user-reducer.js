import { USER_ACTIONS } from "../actionTypes"

const INIT_STATE = {
    data:{
        id: null,
        role:null,
        rights:null,
    },
    auth: null
}

export default function sitesReducer(state=INIT_STATE,action){
    switch(action.type){
        case USER_ACTIONS.REGISTER:
            return { ...state, ...action.payload}
        case USER_ACTIONS.LOGIN:
            return { ...state, ...action.payload}
        case USER_ACTIONS.LOGOUT:
            return { ...state, ...INIT_STATE, auth: false}
        case USER_ACTIONS.AUTH:
            return { ...state, ...action.payload}
        default:
            return state
    }
}