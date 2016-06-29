import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import PopupContent from './PopupContent'
import $ from 'jquery'

const popup = document.getElementById("formPopup");

class PopupButton extends Component{

    constructor(props){
        super(props)
    }
    
    openPopup(){
        ReactDOM.render(<PopupContent onSubmitHandler={this.props.addItem}/>,popup);
        $("#formPopup").show();
    }
    
    render(){
        return (    <div>
                <button onClick={this.openPopup.bind(this)}>add</button>
        </div>
        )
    }
}

export default PopupButton;