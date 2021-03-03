import { combineReducers } from 'redux'
import sites from './site-reducer'
import notifications from './notification-reducer'

const appReducers = combineReducers({
    sites,
    notifications,
})

export default appReducers