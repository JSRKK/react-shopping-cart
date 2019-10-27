import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './actionTypes';
import ProductService from '../../services/ProductService';

const compare = {
    lowestprice: (a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
    },
    highestprice: (a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
    }
};

function* fetchProducts(action) {
    try {
        let products = ProductService.getAllProduct();
        if(!!action.payload.sortBy){
            products = products.sort(compare[action.payload.sortBy])
        }

        if (!!action.payload.callback) {
            action.payload.callback();
        }

        yield put({ type: FETCH_PRODUCTS_SUCCESS, json: products });

    } catch (error) {
        const errMessage = 'Could not fetch products. Try again later.';
        yield put({ type: FETCH_PRODUCTS_FAILURE, json: errMessage });
    }
}

export default function* root() {
    yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts);
}
