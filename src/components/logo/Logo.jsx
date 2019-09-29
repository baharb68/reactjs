import React, { Component } from 'react'
import './Logo.css'

export default class Logo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="logo d-flex justify-content-start">
                <div>
                    <img src={this.props.logo} alt="" className="w-100"/>
                </div>
                <div className="d-flex flex-column w-100 text-right justify-content-center pr-2">
                    <h1 className="m-0">{this.props.webname}</h1>
                    <h2 className="m-0">{this.props.webdesc}</h2>
                </div>
            </div>
        )
    }
}
