import { SITE_ACTIONS } from "../actionTypes";

const INIT_STATE = {
    drawerWidth: 175,
    isDrawerOpen: true,
}

export default function sitesReducer(state=INIT_STATE,action){
    switch(action.type){
        case SITE_ACTIONS.HANDLE_DRAWER:
            return {...state, ...action.payload}
        default:
            return state
    }
}