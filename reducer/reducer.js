import {combineReducers} from 'redux';
import * as types from '../actions/action-type'
import _ from 'lodash'
import $ from 'jquery'
import { routerReducer as routing } from 'react-router-redux'

const initialFromState = {
    status:"edit"
};
const initialItemState = {
    deleteItems:[],
    items:[]
};

function ItemReducer(state = initialItemState, action) {
    var type = action.type;
    if (type == types.Add_ITEM){
        let newState = _.concat(state.items,{type:action.item,key:state.items.length + state.deleteItems.length + 1});
        console.log(newState);
        return _.assign({},state,{items:newState})
    }
    if (type == types.REMOVE_ITEM){
        let newItem = _.filter(state.items,function (value,index) {
            return index != action.index;
        });
        let newDeleteItems = _.chain(state.items).filter(function (value,index) {
            return index == action.index;
        }).concat(state.deleteItems).value();
        console.log(_.assign({},state,{items:newItem,deleteItems:newDeleteItems}));
        return _.assign({},state,{items:newItem,deleteItems:newDeleteItems})
    }
    if (type == types.GET_ITEM){
        let items = $.ajax({
            url:'/item',
            type:'get',
            async:false,
            dataType:'json',
            success:function (data) {

            },
            error:function (err) {
                console.log(err);
            }
        }).responseJSON;
        // console.log(_.assign({},state,{items:items.items,deleteItems:items.deleteItems}));
        return _.assign({},state,{items:items.items,deleteItems:items.deleteItems})
    }
    if (type == types.SUBMIT_ITEM){
        $.ajax({
            url:'/submit',
            type:'get',
            async:true,
            dataType:'json',
            data:{state},
            success:function (data) {
                alert(data);
            },
            error:function (err) {
                console.log(err);
            }
        });
        return state;
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
    FromState:FromReducer,
    routing
});

export default reducers;
