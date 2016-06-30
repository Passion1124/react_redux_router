import React, { Component, PropTypes } from 'react'
import FormPreview from "../components/FormPreview.js"
import { connect } from 'react-redux'

class FromPreviewPage extends Component{
   
    constructor(props){
        super(props);
    }
    
    render(){
        var self = this;
        
        return (
            <div>
                <FormPreview items={this.props.items} />
            </div>
        )
    }
}

FromPreviewPage.propTypes = {
    items:PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        items: state.ItemState.items
    }
}
export default connect(mapStateToProps, {
})(FromPreviewPage)