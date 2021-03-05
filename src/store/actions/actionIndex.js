import { MENU_ACTIONS, NOTIFICATION_ACTIONS, SITE_ACTIONS, USER_ACTIONS } from "../actionTypes";

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
export const getAllMenus = (values) => ({
    type: MENU_ACTIONS.GET_ALL_MENUS,
    payload: values,
})

export const getMenuByID = (values) => ({
    type: MENU_ACTIONS.GET_MENU_BY_ID,
    payload: values,
})

export const creatMneu = (values) => ({
    type: MENU_ACTIONS.CREATE_MENU,
    payload: values,
})

export const updateMenu = (values) => ({
    type: MENU_ACTIONS.UPDATE_MENU,
    payload: values,
})

export const deleteMenu = (values) => ({
    type: MENU_ACTIONS.DELETE_MENU,
    payload: values,
})