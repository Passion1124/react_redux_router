import * as types from './action-type'

export function addItemAction(item) {
    return {
        type:types.Add_ITEM,
        item
    }
}

export function removeItemAction(index) {
    return {
        type:types.REMOVE_ITEM,
        index
    }
}