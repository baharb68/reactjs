import React, { Component } from 'react'

export default class Productitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                 <div className="product-item d-flex flex-row align-items-center pt-2 pt-md-0 ">
                    <h2 className="m-0 pl-1 font-weight-light">{this.props.pname}</h2>
                    <img src={this.props.picon} alt=""/>
                </div>
            </div>
        )
    }
}
