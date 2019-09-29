import React, { Component } from 'react'

export default class Contactusbtn extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            
            <button className="contactbtn text-white mt-4 mx-3"><img src={this.props.btnicon} alt="" className="ml-2"/>{this.props.btntext}</button>
        
        )
    }
}
