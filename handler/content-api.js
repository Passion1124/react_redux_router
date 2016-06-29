import store from '../store/store'
import {addItemAction,removeItemAction} from '../actions/content-action'

export function addItem(item) {
    store.dispatch(addItemAction(item));
}

export function removeItem(index) {
    store.dispatch(removeItemAction(index));
}
