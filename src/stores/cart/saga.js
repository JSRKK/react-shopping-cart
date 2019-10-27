import { put, takeLatest } from 'redux-saga/effects';
import { UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS, UPDATE_CART_FAILURE } from './actionTypes';
function* updateCart({ payload }) {
    try {
        const productQuantity = payload.reduce((sum, p) => {
            sum += p.quantity;
            return sum;
        }, 0)

        const totalPrice = payload.reduce((sum, p) => {
            sum += (p.quantity *p.price);
            return sum;
        }, 0)

        const json = {
            products: payload,
            total: {
                productQuantity,
                totalPrice
            }
        }
        yield put({ type: UPDATE_CART_SUCCESS, json });

    } catch (error) {
        const errMessage = 'Could not fetch products. Try again later.';
        yield put({ type: UPDATE_CART_FAILURE, json: errMessage });
    }
}

export default function* root() {
    yield takeLatest(UPDATE_CART_REQUEST, updateCart);
}
