import React, { Component } from 'react'
import step from '../img/step.png'

export default class Orderpart extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            
            <div className="col-12 col-md-4 d-flex flex-column mt-2 mt-md-0 ">
                <div>
                    <div className="position-relative d-flex justify-content-center align-items-center">
                        <img src={step} alt="" className="w-100"/>
                        <img src={this.props.ordericon} alt="" className="position-absolute"/>
                    </div>
                    <div className="bg-white px-2 px-md-5 py-4 b-shadow2">
                        <h3 className="pb-2 font-weight-bold">{this.props.title}</h3>
                        <h6 className="m-0 text-center"> {this.props.content}</h6>
                    </div>
                </div>
            </div>
            
        )
    }
}
