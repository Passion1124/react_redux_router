import React, { Component, PropTypes } from 'react'
import $ from 'jquery'

class PopupContent extends Component{

    constructor(props){
        super(props)
    }
    
    chosePopup(){
        $("#formPopup").hide();
    }
    
    onSubmit(){
        let value = $("#popup input[name='type']:checked").val();
        this.props.onSubmitHandler(value);
        this.chosePopup();
    }
    
    render(){
        return (
            <div id="popup">
                <form action="#">
                    <input type="radio" name="type" value="text"/>text <br/>
                    <input type="radio" name="type" value="date"/>date <br/>
                    <button type="button" onClick={this.onSubmit.bind(this)}>determine</button>
                    <p onClick={this.chosePopup}>×</p>
                </form>
            </div>
        )
    }
}

export default PopupContent;
