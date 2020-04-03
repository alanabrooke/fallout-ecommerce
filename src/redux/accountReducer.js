import axios from 'axios';

const initialState = {
    email:'',
    username: '',
    password: '',
    phone: '',
    address: '',
    is_vendor: null,
    user: [],
    loading: false
}

const UPDATE_STATE = 'UPDATE_STATE';
const EDIT_USER = 'EDIT_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const DELETE_USER = 'DELETE_USER';



export function editUser({ user_id, username, email, password, address, phone, is_vendor,  }) {
    const data = axios.put(`/account/edit/${user_id}`, { username, email, password, address, phone, is_vendor,  })
    .catch(err => console.error(err));
  
    return {
      type: EDIT_USER,
      payload: data
    }
  }
  
export const logout = ()  => {
    return {
        type: LOGOUT_USER,
        payload: axios.post('/account/logout')
    }
}


export function deleteUser(user_id) {
    const data = axios.delete(`/account/delete/${user_id}`)
    .catch(err => console.error(err));

    return {
      type: DELETE_USER,
      payload: data
    }
  }



export default function accountReducer(state = initialState, action) {
    const {payload} = action;

    switch(action.type) {
        case UPDATE_STATE: 
        return {
            ...state,
            ...payload
        }

        case `${EDIT_USER}_PENDING`: 
              return{
                  ...state,
                  loading: true
              }
          case `${EDIT_USER}_FULFILLED`:
              return{
                  ...state,
                  email: payload.data.email,
                  username: payload.data.username,
                  phone: payload.data.phone,
                  address: payload.data.address,
                  password: payload.data.password,
                  loading: false
              }
        case `${DELETE_USER}_PENDING`:
                return {
                  ...state,
                  loading: true
                }
        case `${DELETE_USER}_FULFILLED`:
                return {
                  ...state,
                  user_id: null,
                  email: null,
                  username: null,
                  phone: null,
                  address: null,
                  is_vendor: null,
                  loading: false
                }
        case `${LOGOUT_USER}_PENDING`:
                return {
                ...state,
                loading: true
    }
        case `${LOGOUT_USER}_FULFILLED`:
                return {
                ...state,
                loading: false,
                user: payload.data
            }
        default:
        return state;
        }
    }