export const SITE_ACTIONS = {
    HANDLE_DRAWER:"handle_drawer",
    CLOSE_DRAWER:"close_drawer",
} 

export const USER_ACTIONS = {
    REGISTER:"user_register",
    LOGIN:"user_login",
    LOGOUT:"user_logout",
    AUTH:"user_authenticated",
}

export const NOTIFICATION_ACTIONS = {
    ERROR:"error_global",
    SUCCESS:"success_global",
    INFO:"info_global",
    CLEAR:"clear_notification",
}

export const MENU_ACTIONS = {
    GET_ALL_MENUS:"get_all_menus",
    GET_MENU_BY_ID:"get_menu_by_id",
    CREATE_MENU:"create_menu",
    UPDATE_MENU:"update_menu",
    DELETE_MENU:"delete_menu",
}

export const CATEGORY_ACTIONS = {
    GET_ALL : "get_all_categories",
    GET_BY_ID: "get_category_by_id",
    DELETE_BY_ID:"delete_category_by_id",
}