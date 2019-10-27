import { LOAD_CART, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS, UPDATE_CART_FAILURE } from './actionTypes';

const initialState = {
    products: [],
    total: {
        productQuantity: 0,
        totalPrice: 0,
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
            return {
                ...state,
                products: action.payload
            };

        case UPDATE_CART_REQUEST:
            return { ...state }

        case UPDATE_CART_SUCCESS:
            return {
                ...state,
                products: [...action.json.products],
                total: { ...action.json.total }
            }

        case UPDATE_CART_FAILURE:
            return { ...state, errMessage: action.json }

        default:
            return state;
    }
}