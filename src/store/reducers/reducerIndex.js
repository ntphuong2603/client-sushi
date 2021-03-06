import { combineReducers } from 'redux'
import sites from './site-reducer'
import notifications from './notification-reducer'
import users from './user-reducer'
import menus from './menu-reducer'
import categories from './category-reducer'

const appReducers = combineReducers({
    sites,
    notifications,
    users,
    menus,
    categories,
})

export default appReducers