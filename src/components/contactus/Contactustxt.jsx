import React, { Component } from 'react'

export default class Contactustxt extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-12 col-md-4 p-0 ">
                <div className="contacttxt d-flex align-items-center justify-content-center py-3 px-3">
                    <h3 className="ml-2 mb-0">{this.props.title}</h3>
                    <div className="d-flex">
                        <p className="text-justify m-0">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}
