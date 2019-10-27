import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './actionTypes';

const initialState = {
    loading: false,
    products: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.json, loading: false };
        case FETCH_PRODUCTS_FAILURE:
            return { ...state, errMessage: action.json, loading: false };
        default:
            return state;
    }
}