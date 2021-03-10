import { actionType } from '../action/actionType';

export const search = (state = {
    searchValue: ''
}, action) => {
    switch(action.type) {
        case (actionType.CHANGE_SEARCHING_VALUE): {
            return {
                ...state,
                searchValue: action.payload.value
            }
        }
        default: return state;
    }
}