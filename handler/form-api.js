import store from '../store/store'
import {showEditAction , showPreviewAction} from '../actions/from-action'


export function showEdit() {
    store.dispatch(showEditAction());
}
export function showPreview() {
    store.dispatch(showPreviewAction());
}