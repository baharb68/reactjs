import React, { Component } from 'react'
import './Aboutus.css'

export default class Aboutus extends Component {
    render() {
        return (
            <div className="w-75 about container d-flex flex-column flex-md-row py-5">
                <div className="col-12 col-md-8 d-flex flex-column p-0 pl-md-4">
                    <div className="d-flex justify-content-start">
                        <div>
                            <img src={this.props.logo} alt="" className="w-100"/>
                        </div>
                        <div className="d-flex flex-column w-100 text-right justify-content-center pr-2">
                            <h1 className="m-0">{this.props.webname}</h1>
                            <h2 className="m-0">{this.props.webdesc}</h2>
                        </div>
                    </div>
                    <p className="text-justify mt-3">{this.props.briefing}</p>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column p-0 pr-md-4">

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">{this.props.btntext}</span>
                        </div>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    </div>
                </div>
                
            </div>
        )
    }
}
