import React, { Component, PropTypes } from 'react'
import FormEdit from "../components/FormEdit.js"
import { connect } from 'react-redux'

class FromEditPage extends Component{
    constructor(props){
        super(props);

    }
    
    render(){
        var self = this;
        
        return (<div>
            <FormEdit items={this.props.items} />
        </div>)
    }
}

FromEditPage.propTypes = {
    items: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps) {
    return {
        items:state.ItemState.items
    }
}

export default connect(mapStateToProps,{})(FromEditPage)