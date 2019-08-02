import * as Types from './types'

export function changeFilter(filter) {
    return {
        type: Types.CHANGE_VISIBILITY_FILTER,
        filter
    }
};