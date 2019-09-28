import React, { Component } from 'react'
import './Main.css'
import Services from '../services/Services'
import Orderp from  '../OrderProcess/OrderP'
import Category from '../category/Category'
import Products2 from '../products2/Products2'
import Comment from '../comment/Comment'

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
                <div className="container mt-5 ">
                    <Category />
                    <Products2 />
                </div>
                <div className="container-fluid comment-bg mt-5 pt-3 pb-5">
                    <Comment />
                </div>
            </div>
        )
    }
}

