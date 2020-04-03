import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

//reducers
import authReducer from '../redux/authReducer'
import accountReducer from '../redux/accountReducer'
import itemsReducer from '../redux/itemsReducer'

const combineReducer = combineReducers({
    authReducer,
    accountReducer,
    itemsReducer
})

export default createStore(combineReducer, applyMiddleware(promise))