import React, { Component } from 'react'

export default class Servicepart extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className=" col-12 col-md-3 p-0 mt-2 mt-md-0 pl-md-2 ">
                <div className="parts bg-white  d-flex flex-row px-3 py-4">
                    <div className="col-9  d-flex flex-column text-right p-0 ml-2 ml-md-0">
                        <h2>{this.props.title}</h2>
                        <h6 className="m-0">{this.props.content} </h6>
                    </div>
                    <div className="col-3 p-0 w-100">
                        <img src={this.props.serviceicon} alt="" className="w-100"/>
                    </div>
                </div>
            </div>
        )
    }
}
