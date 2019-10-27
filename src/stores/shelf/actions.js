import { FETCH_PRODUCTS_REQUEST } from './actionTypes';

export const fetchProducts = (sortBy, callback) => ({
    type: FETCH_PRODUCTS_REQUEST,
    payload: { sortBy, callback }
})