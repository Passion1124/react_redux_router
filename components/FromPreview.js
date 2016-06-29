import React, { Component, PropTypes } from 'react'

class FromPreview extends Component{

    constructor(props){
        super(props)
    }

    render(){
        var self = this;
        return (
            <div>
                <ul>
                    {self.props.items.map(function (item,index) {
                        return (<li>{item}
                            {(function () {
                                if (item === "date"){
                                    return (<input type="date"/>)
                                }else {
                                    return (<input type="text" />)
                                }
                            })()}
                        </li>)
                    })}
                </ul>
            </div>)
    }
}

export default FromPreview;
