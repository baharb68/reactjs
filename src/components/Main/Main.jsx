import React, { Component } from 'react'
import './Main.css'
import Services from '../services/Services'
import Orderp from  '../OrderProcess/OrderP'
import Category from '../category/Category'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="container pt-5">
                    <Services /> 
                </div>
                <div className="container-fluid world-bg mt-5">
                    <Orderp />
                </div>
                <div className="container mt-5">
                    <Category />
                </div>
            </div>
        )
    }
}

