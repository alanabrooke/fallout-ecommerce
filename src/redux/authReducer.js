import axios from 'axios';

const initialState = {
    email:'',
    username: '',
    phone: '',
    address: '',
    password: '',
    is_vendor: null, 
    user: [],
    loading: false
}

//constants
const UPDATE_STATE = 'UPDATE_STATE';
const REGISTER_USER = 'REGISTER_USER';
const GET_USER = 'GET_USER';
const LOGIN_USER = 'LOGIN_USER';



export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const registerUser = (email, username, phone, address, password, is_vendor) => {
    return {
        type: REGISTER_USER,
        payload: axios.post('/register', {
            email,
            username,
            phone, 
            address,
            password,
            is_vendor
        })
    }
}

export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get('/user')
    }
}
export const loginUser = (username,password) => {
   return { type: LOGIN_USER,
    payload: axios.post('/login', {
        username,
        password
    })
}
}

export default function authReducer(state = initialState, action) {
    const {payload} = action;
    switch(action.type) {
        case UPDATE_STATE: 
        return {
            ...state,
            ...payload
        }
        case `${GET_USER}_PENDING`:
            return {
                ...state,
                loading: true
                }
    case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                email: payload.data.email,
                username: payload.data.username,
                phone: payload.data.phone,
                address: payload.data.address,
                is_vendor: payload.data.is_vendor,
                loading: false
                }
        case `${REGISTER_USER}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                loading: false
            }
        case `${LOGIN_USER}_PENDING`:
            return {
                ...state,
                loading: true,
            }
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                user: payload.data
            }

        default: 
        return state;
    }
}