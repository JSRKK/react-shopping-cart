import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import shelfReducer from './shelf/reducer';
import sortReducer from './sort/reducer';

export default combineReducers({
    cart: cartReducer,
    shelf: shelfReducer,
    sort: sortReducer,
});