import { UPDATE_SORT } from "./actionTypes";

const initailState = {
    sortType: 'lowestprice'
}

export default function (state = initailState, action) {
    switch (action.type) {
        case UPDATE_SORT:
            return {
                ...state,
                sortType: action.payload
            }
    
        default:
            return state;
    }
    
}