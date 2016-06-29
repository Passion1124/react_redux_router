import React, { Component, PropTypes } from 'react'
import * as FromApi from '../handler/from-api'
import FromEdit from './FromEdit'
import FromPreview from './FromPreview'


class Content extends Component{

    constructor(props){
        super(props)
    }
    
    renderEdit(){
        FromApi.showEdit();
    }
    
    renderPreview(){
        FromApi.showPreview();
    }
    
    render(){
        var self = this;
        return (
            <div>
                {(function () {
                    if (self.props.status === "edit"){
                       return (<button onClick={self.renderPreview}>preview</button>)
                    }else {
                        return (<button onClick={self.renderEdit}>edit</button>)
                    }
                })()}
                
                {(function () {
                    if (self.props.status === "edit"){
                        return (<FromEdit items={self.props.items} />)
                    }else {
                        return (<FromPreview items={self.props.items} />)
                    }
                })()}
            </div>
        )
    }
}

export default Content;