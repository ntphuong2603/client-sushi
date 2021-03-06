import { CATEGORY_ACTIONS } from "../actionTypes"

export default function sitesReducer(state=[],action){
    switch(action.type){
        case CATEGORY_ACTIONS.GET_ALL:
            return [...state, ...action.payload]
        case CATEGORY_ACTIONS.GET_BY_ID:
            return [ ...state, ...action.payload]
        case CATEGORY_ACTIONS.DELETE_BY_ID:
            return [ ...state, ...action.payload]
        default:
            return state
    }
}