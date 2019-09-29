import React, { Component } from 'react'

export default class Aboutus extends Component {
    render() {
        return (
            <div className="container d-flex flex-column flex-md-row">
                <div className="col-12 col-md-8 d-flex flex-column">
                    <div className="d-flex justify-content-start">
                        <img src={this.props.logo} alt=""/>
                        <div className="d-flex flex-column">
                            <h1>{this.props.webname}</h1>
                            <h2>{this.props.webdesc}</h2>
                        </div>
                        <p>{this.props.briefing}</p>
                    </div>

                </div>
                <div className="col-12 col-md-4 d-flex flex-column">
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
