import React, { Component } from 'react'
import './Partstitle.css'

export default class Partstitle extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="ptitle">
                <h2 className="font-weight-bold pb-2">{this.props.title}</h2>
                <img src={this.props.seperator} alt="" className=""/>
            </div>
        )
    }
}
