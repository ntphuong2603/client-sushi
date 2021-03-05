import { NOTIFICATION_ACTIONS, SITE_ACTIONS, USER_ACTIONS } from "../actionTypes";

///////////////////////// - Drawer actions - /////////////////////////
export const handleDrawer = (isDrawerOpen) => ({
    type: SITE_ACTIONS.HANDLE_DRAWER,
    payload: {isDrawerOpen: !isDrawerOpen}
})

export const closeDrawer = () => ({
    type: SITE_ACTIONS.HANDLE_DRAWER,
    payload: {isDrawerOpen:false}
})

///////////////////////// - Notification actions - /////////////////////////
export const successNotification = (msg) => ({
    type: NOTIFICATION_ACTIONS.SUCCESS,
    payload: {success:true, msg: msg}
})

export const errorNotification = (msg) => ({
    type: NOTIFICATION_ACTIONS.ERROR,
    payload: {error:true, msg: msg}
})

export const infoNotification = (msg) => ({
    type: NOTIFICATION_ACTIONS.INFO,
    payload: {info:true, msg: msg}
})

export const clearNotification = () => {
    return (dispatch)=>{
        dispatch({
            type: NOTIFICATION_ACTIONS.CLEAR,
        })
    }
}

///////////////////////// - User actions - /////////////////////////
export const userRegister = (values) => ({
    type: USER_ACTIONS.REGISTER,
    payload: values,
})

export const userLogin = (values) => ({
    type: USER_ACTIONS.LOGIN,
    payload: values,
})

export const userLogout = () => ({
    type: USER_ACTIONS.LOGOUT,
    // payload: values,
})

export const userAuthenticate = (values) => ({
    type: USER_ACTIONS.AUTH,
    payload: values,
})

///////////////////////// - Menu actions - /////////////////////////