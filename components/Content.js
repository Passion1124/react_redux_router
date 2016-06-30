import React, { Component, PropTypes } from 'react'
import * as FormApi from '../handler/form-api'
import FormEdit from './FormEdit'
import FormPreview from './FormPreview'
import { connect } from 'react-redux'

class Content extends Component{

    constructor(props){
        super(props)
    }
    
    renderEdit(){
        FormApi.showEdit();
    }
    
    renderPreview(){
        FormApi.showPreview();
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
                        return (<FormEdit items={self.props.items} />)
                    }else {
                        return (<FormPreview items={self.props.items} />)
                    }
                })()}
            </div>
        )
    }
}

Content.propTypes = {
    items:PropTypes.array.isRequired,
    status:PropTypes.string.isRequired
};
console.log(Content.propTypes);

function mapStateToProps(state, ownProps) {
    return {
        items: state.ItemState.items,
        status:state.FromState.status
    }
}
console.log(connect(mapStateToProps,{})(Content));

export default connect(mapStateToProps,{})(Content);