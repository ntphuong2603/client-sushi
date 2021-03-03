import { SITE_ACTIONS } from "../actionTypes";

// export const openDrawer = () => ({
//     type: SITE_ACTIONS.OPEN_DRAWER,
//     payload: {isDrawerOpen: true}
// })

// export const closeDrawer = () => ({
//     type: SITE_ACTIONS.OPEN_DRAWER,
//     payload: {isDrawerOpen: false}
// })

export const handleDrawer = (isDrawerOpen) => ({
    type: SITE_ACTIONS.HANDLE_DRAWER,
    payload: {isDrawerOpen: !isDrawerOpen}
})