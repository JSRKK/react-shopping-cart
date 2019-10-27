import { all } from 'redux-saga/effects';
import shelfSaga from './shelf/saga';
import cartSaga from './cart/saga';

export default function* rootSaga(){
    yield all([
        shelfSaga(),
        cartSaga()
    ])
}