import React, { Component } from 'react'
import './OrderP.css'
import Orderpart from './Orderpart'
import seperator from '../img/seperator.png'
import shop from '../img/shoppingicon.png'
import mail from '../img/sendicon.png'
import credit from '../img/credit-card.png'
import Products from '../products/Products'
import Partstitle from '../Partstitle'

export default class OrderP extends Component {
    render() {
        return (
            <div className="order-steps container d-flex flex-column align-items-center position-relative h-100 ">
                <div className="d-none d-md-block w-100 position-absolute">
                    <Products />
                </div>
                <Partstitle title="مراحل ثبت سفارش" seperator={seperator}/>
                
                <div className="d-flex flex-column flex-md-row pt-5 w-75">
                    <Orderpart ordericon={credit} title="ثبت نام حساب کاربری" content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" />
                    <Orderpart ordericon={mail} title="تکمیل و ارسال مدارک" content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" />
                    <Orderpart ordericon={shop} title="ثبت سفارش خرید" content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" />
                </div>    
            </div>
        ) 
    }
}
