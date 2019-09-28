import React, { Component } from 'react'
import './Products.css'
import steam from '../img/steam.png'
import paypal from '../img/paypal.png'
import playstation from '../img/playstation.png'
import webmoney from '../img/webmoney.png'
import xbox from '../img/xbox.png'
import apple from '../img/apple.png'
import Productitem from './Productitem'

export default class Products extends Component {
    render() {
        return (
            <div className="product d-flex flex-row flex-wrap justify-content-around bg-white mt-5 w-100 b-shadow position-absolute ">
                <Productitem pname="XBOX" picon={xbox}  />
                <Productitem pname="iTunes" picon={apple} />
                <Productitem pname="PlayStation" picon={playstation} />
                <Productitem pname="PayPal" picon={paypal} />
                <Productitem pname="S T E A M" picon={steam} />
                <Productitem pname="WebMoney" picon={webmoney} />
                <div className="product-item d-flex flex-row align-items-center position-relative">
                    <h2 className="m-0 pl-1 font-weight-light">Perfect Money</h2>
                    <div className="last-item rounded-circle position-absolute text-white">PM</div>
                </div>
                
            </div>
        )
    }
}
