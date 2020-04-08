import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

//reducers
import authReducer from '../redux/authReducer'
import accountReducer from '../redux/accountReducer'
import productReducer from './productReducer'
import cartReducer from '../redux/cartReducer'

const combineReducer = combineReducers({
    authReducer,
    accountReducer,
    productReducer,
    cartReducer
})

export default createStore(combineReducer, applyMiddleware(promise))