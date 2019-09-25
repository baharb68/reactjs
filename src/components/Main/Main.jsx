import React, { Component } from 'react'
import './Main.css'
import Services from '../services/Services'
import Products from '../products/Products'
import Orderp from  '../OrderProcess/OrderP'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="container pt-5">
                <Services /> 
                </div>
                <div className="container-fluid world-bg mt-5">
                    {/* <Products /> */}
                    <Orderp />
                </div>
            </div>
        )
    }
}

