import axios from 'axios';

//initial state
const initialState = {
    products: [],
    product: {},
    // loading: false
}

//const strings
 const GET_PRODUCTS = 'GET_PRODUCTS'
 const GET_PRODUCT = 'GET_PRODUCT'
 const ADD_PRODUCT = 'ADD_PRODUCT'
 const EDIT_PRODUCT = 'EDIT_PRODUCT'
 const DELETE_PRODUCT = 'DELETE_PRODUCT'
const SET_PRODUCT = 'SET_PRODUCT'
const UPDATE_STATE = 'GET_PRODUCT'

//functions
export function getProducts(){
    return {
        type: GET_PRODUCTS,
        payload: axios.get('/products')
    }
}

export function getProduct(prod_id){
    return {
        type: GET_PRODUCT,
        payload: axios.get(`/products/${prod_id}`)
    }
}

export function addProduct(product){
    return {
        type: ADD_PRODUCT,
        payload: axios.post('/vendor/add', product)
    }
}

export function editProduct(product, prod_id){
    console.log(prod_id)
    return {
        type: EDIT_PRODUCT,
        payload: axios.put(`/vendor/edit/${prod_id}`, product)
    }
}

export function deleteProduct(prod_id){
    return {
        type: DELETE_PRODUCT,
        payload: axios.delete(`/vendor/delete/${prod_id}`)
    }
}

export function setProduct(prod_id){
    return {
        type: SET_PRODUCT,
        payload: axios.get(`/products/${prod_id}`)
    }
}
export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

//reducer

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case UPDATE_STATE: 
            return {
                ...state,
                ...payload
            }
        case `${GET_PRODUCTS}_FULFILLED`:
            // console.log('products: ', payload.data)
            return {
                ...state,
                products: payload.data
            }
        case `${GET_PRODUCT}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${GET_PRODUCT}_FULFILLED`:
            return {
                ...state,
                product: payload.data,
                loading: false
            }
        case `${ADD_PRODUCT}_FULFILLED`:
            return {
                ...state,
                products: payload.data
            }
        case `${EDIT_PRODUCT}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${EDIT_PRODUCT}_FULFILLED`:
            return {
                ...state,
                products: payload.data,
                loading: false
            }    
        case `${DELETE_PRODUCT}_FULFILLED`:
            return {
                ...state,
                products: payload.data,
                loading: false
            } 
        case `${DELETE_PRODUCT}_PENDING`:
            return {
                ...state,
                loading: true
            }  
        case `${SET_PRODUCT}_FULFILLED`:
            return {
                ...state,
                product: payload.data
            }     
        default: return state    
    }
}