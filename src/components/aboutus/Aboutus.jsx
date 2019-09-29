import React, { Component } from 'react'
import './Aboutus.css'
import './AboutusItem'
import about1 from '../img/about1.png'
import about2 from '../img/about2.png'
import about3 from '../img/about3.png'
import AboutusItem from './AboutusItem'

export default class Aboutus extends Component {
    render() {
        return (
            <div className="about container d-flex flex-column flex-md-row p-5">
                <div className="col-12 col-md-8 d-flex flex-column p-0 px-md-5 ">
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
                <div className="col-12 col-md-4  d-flex flex-column p-0 pr-md-4">
                    <div className="d-flex">
                        <AboutusItem photo={about3} text="ستاد سازمان دهی پایگاه های اینترنتی" />
                        <AboutusItem photo={about2} text="اتحادیه کشوری کسب و کارهای مجازی" />
                        <AboutusItem photo={about1} text="نماد اعتماد الکترونیکی" />
                    </div>

                    <div class="input-group mb-3 py-2 px-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">{this.props.btntext}</span>
                        </div>
                        <input type="text" class="form-control text-right" id="basic-url" aria-describedby="basic-addon3" placeholder="لطفا ایمیل خود را وارد کنید"/>
                        <span class="d-flex align-items-center "><h5 className="font-weight-light p-2 m-0">{this.props.formtitle}</h5></span>
                    </div>
                </div>
                
            </div>
        )
    }
}
