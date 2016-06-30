import React, { Component, PropTypes } from 'react'
import * as FormApi from '../handler/form-api'
import { connect } from 'react-redux'

class MyContainer extends Component{

    constructor(props){
        super(props)
    }

    renderEdit(){
        FormApi.showEdit();
        this.context.router.push("/edit");
    }

    renderPreview(){
        FormApi.showPreview();
        this.context.router.push("/preview");
    }

    render(){
        var self = this;
        return (
            <div>
                {(function () {
                    if (self.props.status === "edit"){
                        return (<button onClick={e=>self.renderPreview(e)}>preview</button>)
                    }else {
                        return (<button onClick={e=>self.renderEdit(e)}>edit</button>)
                    }
                })()}

                {this.props.children}
            </div>
        )
    }
}

MyContainer.propTypes = {
    status:PropTypes.string.isRequired
};

MyContainer.contextTypes = {
    router:React.PropTypes.object
};


function mapStateToProps(state, ownProps) {
    return {
        status: state.FromState.status
    }
}

export default connect(mapStateToProps,{})(MyContainer);