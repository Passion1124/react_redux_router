import React, { Component, PropTypes } from 'react'
import * as contentApi from '../handler/content-api'

class FromPreview extends Component{

    constructor(props){
        super(props)
    }
    onSubmit(){
        contentApi.submitItem();
    }

    render(){
        var self = this;
        return (
            <div>
                <ul>
                    {self.props.items.map(function (item,index) {
                        return (<li>{item.type}
                            {(function () {
                                if (item.type === "date"){
                                    return (<input type="date"/>)
                                }else {
                                    return (<input type="text" />)
                                }
                            })()}
                        </li>)
                    })}
                </ul>
                <button type="button" onClick={this.onSubmit}>submit</button>
            </div>)
    }
}

export default FromPreview;
