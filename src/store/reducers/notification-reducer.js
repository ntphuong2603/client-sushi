import { NOTIFICATION_ACTIONS } from "../actionTypes";

export default function sitesReducer(state={},action){
    switch(action.type){
        case NOTIFICATION_ACTIONS.SUCCESS:
            return {...state, ...action.payload}
        case NOTIFICATION_ACTIONS.ERROR:
            return {...state, ...action.payload}
        case NOTIFICATION_ACTIONS.INFO:
            return {...state, ...action.payload}
        case NOTIFICATION_ACTIONS.CLEAR:
            return {}
        default:
            return state
    }
}