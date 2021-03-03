import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import appReducers from "./reducers/reducerIndex"

const appStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        appReducers,
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}

export default appStore