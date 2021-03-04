import { combineReducers } from 'redux'
import sites from './site-reducer'
import notifications from './notification-reducer'
import users from './user-reducer'

const appReducers = combineReducers({
    sites,
    notifications,
    users,
})

export default appReducers