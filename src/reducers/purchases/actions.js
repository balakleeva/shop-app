import * as Types from './types'

export const addNewPurchase = (text) => ({
    type: Types.ADD_PURCHASE,
    text
});

export const removePurchase = (id) => ({
    type: Types.REMOVE_PURCHASE,
    id
});

export const togglePurchase = (id) => ({
    type: Types.TOGGLE_TODO,
    id
});
