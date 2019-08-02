import * as Types from './types'

const initState = {
    items: [
        {
            id: 1,
            text: 'Potato',
            isBought: false
        },
        {
            id: 2,
            text: 'Carrot',
            isBought: false
        }
    ]
};

export const purchasesList = (state = initState, action) => {
    switch (action.type) {
        case Types.ADD_PURCHASE:
            if (action.text === '') {
                alert('Write your purchase!')
                return {...state}
            }
            return {
                ...state.items,
                items: [...state.items,
                    {
                        id: state.items.length + 1,
                        text: action.text,
                        isBought: false,
                    }
                ]
            };
        case Types.REMOVE_PURCHASE:
            return {
                ...state,
                items: [...state.items.filter(item => item.id !== action.id)]
            };
        case Types.TOGGLE_TODO:
            return {
                ...state,
                items: [...state.items.map(item =>
                    item.id !== action.id ?
                        {...item} : {...item, isBought: !item.isBought}
                )]
            };
        default:
            return state
    }
};