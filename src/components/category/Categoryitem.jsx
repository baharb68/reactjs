import React, { Component } from 'react'

export default class Categoryitem extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div className="col-12 col-md-4 d-flex justify-content-center mt-5">
                <div className="d-flex flex-column align-items-center bg-white b-shadow px-4 py-5 position-relative">
                    <div className="d-flex justify-content-center p-0 mb-3">
                        <div>
                            <img src={this.props.icon} alt="" className="pl-2 w-100"/>
                        </div>
                        <h2 className="m-0 pl-1 ">{this.props.name}</h2>
                    </div>
                    <h3 className="mb-3">{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
                <button className="mr-auto text-white mt-4 position-absolute">{this.props.btntext}<img src={this.props.btnicon} alt="" className="mr-4"/></button>
            </div>
        )
    }
}
