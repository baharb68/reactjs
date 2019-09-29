import React, { Component } from 'react'

export default class Articlepart extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-12 col-md-4 mt-2 mt-md-0 p-2">
                <div className="article d-flex flex-column align-items-center position-relative bg-white b-shadow">
                    <div className="position-relative">
                        <img src={this.props.photo} alt="" className="w-100"/>
                        <div className="text-white position-absolute px-3 font-weight-light">{this.props.date}</div>
                    </div>
                    <h2 className="my-3 font-weight-bold text-center">{this.props.title}</h2>
                    <p className="text-justify mb-3 px-3">{this.props.content}</p>
                    <button className="mr-auto text-white position-absolute rounded-circle p-3"><img src={this.props.btnicon} alt="" className=""/></button>
                </div>
                
            </div>
        )
    }
}
