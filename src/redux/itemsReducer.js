import axios from 'axios'
require('dotenv').config()

const initialState = {
    items: []
}

const GET_ITEMS = 'GET_ITEMS';
const UPDATE_STATE = 'UPDATE_STATE';


export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const getItems = () => {
    return {
        type: GET_ITEMS,
        payload: axios.get('/items')
    }
}


export default function itemsReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case UPDATE_STATE: 
            return {
                ...state,
                ...payload
            }

        case `${GET_ITEMS}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${GET_ITEMS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                items: payload.data
            }

        default:
            return state;
    }
}