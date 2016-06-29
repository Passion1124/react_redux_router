import {combineReducers} from 'redux';
import * as types from '../actions/action-type'
import _ from 'lodash'


const initialFromState = {
    status:"edit"
};
const initialItemState = {
    items:[]
};

function ItemReducer(state = initialItemState, action) {
    var type = action.type;
    if (type == types.Add_ITEM){
        let newState = _.concat(state.items,action.item);
        return _.assign({},state,{items:newState})
    }
    if (type == types.REMOVE_ITEM){
        let newState = _.filter(state.items,function (value,index) {
            return index != action.index;
        });
        return _.assign({},state,{items:newState})
    }
    
    return state;
}

function FromReducer(state = initialFromState, action) {
    switch (action.type){
        case types.SHOW_DEIT:
            return _.assign({},state,{status:'edit'});
        case types.SHOW_PREVIEW:
            return _.assign({},state,{status:'preview'});
        default:
            return state;
    }
}

const reducers = combineReducers({
    ItemState:ItemReducer,
    FromState:FromReducer
});

export default reducers;
