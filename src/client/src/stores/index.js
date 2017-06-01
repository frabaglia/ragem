import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'

import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import {apiMiddleware} from '../middlewares/api'
import {rootReducer} from '../reducers'
/**********************************************************************************/
/* This enhancer let's Redux Dev Tools (Chrome ext.) to find the app store        */
/**********************************************************************************/
const middleware = applyMiddleware(reduxThunk, reduxLogger, apiMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {}

export default createStore(rootReducer, initialState, composeEnhancers(middleware))
