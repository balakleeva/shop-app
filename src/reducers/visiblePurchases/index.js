import * as Types from './types'

export const visiblePurchases = (state = Types.filterList.SHOW_ALL, action) => {
    switch (action.type) {
        case Types.CHANGE_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    };
};