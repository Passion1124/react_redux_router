import React, { Component, PropTypes } from 'react'
import * as ContentApi from '../handler/content-api'
import $ from 'jquery'
import PopupButton from './PopupButton'


class FromEdit extends Component{

    constructor(props){
        super(props)
    }

    addItem(item){
        ContentApi.addItem(item)
    }

    removeItem(event){
        let index = $(event.currentTarget).data('item-index');
        ContentApi.removeItem(index);
    }

    render(){
        var self = this;
        return (
            <div>
                <ul>
                    {this.props.items.map((item,index) => {
                        return (<li>{item.type}
                            {(() => {
                                if (item.type === "date"){
                                    return (<input type="date" />)
                                }else {
                                    return (<input type="text" />)
                                }
                            })()}
                            <button onClick={this.removeItem} data-item-index={index}>-</button>
                        </li>)
                    })}
                </ul>
                <PopupButton addItem={this.addItem} />
            </div>
        )
    }
}

export default FromEdit;