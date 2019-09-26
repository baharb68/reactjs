import React, { Component } from 'react'

export default class Orderpart extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                 <div className="col-12 col-md-4 d-flex flex-column ">
                        <div>
                            <img src={this.props.ordericon} alt="" className="w-100"/>
                            <div className="bg-white px-5 py-4 b-shadow2">
                                <h3 className="pb-2 font-weight-bold">{this.props.title}</h3>
                                <h6 className="m-0 text-center"> {this.props.content}</h6>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
