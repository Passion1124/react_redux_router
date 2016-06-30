import store from '../store/store'
import {addItemAction,removeItemAction,getItemAction,submitItemAction} from '../actions/content-action'

export function addItem(item) {
    store.dispatch(addItemAction(item));
}

export function removeItem(index) {
    store.dispatch(removeItemAction(index));
}

export function getItem() {
    store.dispatch(getItemAction());
}

export function submitItem() {
    store.dispatch(submitItemAction())
}
