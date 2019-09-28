import React, { Component } from 'react'
import './Products2.css'

export default class Products2item extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-12 col-md-4  d-flex flex-column ">
                <div className="productitem">
                    <div className="d-flex justify-content-center align-items-center">
                        <h2 className="m-0 pl-3 text-white ">{this.props.name}</h2>
                        <div>
                            <img src={this.props.icon} alt="" className="pl-2 w-100"/>
                        </div>
                    </div>
                    <div className="bg-white px-2">
                        <h3 className="pt-3">{this.props.title}</h3>
                        <p className="text-right">{this.props.content}</p>
                        <div className="d-flex justify-content-between">
                            <div className="like">
                                <img src={this.props.likeicon} alt="" className="w-100"/>
                            </div>
                            <h4>{this.props.cost}تومان</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
