import { MENU_ACTIONS } from "../actionTypes"

export default function sitesReducer(state=[],action){
    switch(action.type){
        case MENU_ACTIONS.GET_ALL_MENUS:
            return [...state, ...action.payload]
        case MENU_ACTIONS.GET_MENUS:
            return [...state, ...action.payload]
        case MENU_ACTIONS.CREATE_MENU:
            return [...state, ...action.payload]
        case MENU_ACTIONS.UPDATE_MENU:
            return [...state, ...action.payload]
        case MENU_ACTIONS.DELETE_MENU:
            return [...state, ...action.payload]
        default:
            return state
    }
}