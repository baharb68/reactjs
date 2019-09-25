import React, { Component } from 'react'
import './OrderP.css'
import seperator from '../img/seperator.png'
import shop from '../img/step-shop.png'
import mail from '../img/step-mail.png'
import credit from '../img/step-credit.png'
import Products from '../products/Products'

export default class OrderP extends Component {
    render() {
        return (
            <div className="order-steps container d-flex flex-column align-items-center  position-relative w-100 h-100">
                <Products />
                <h2 className="font-weight-bold pb-2">مراحل ثبت سفارش</h2>
                <img src={seperator} alt="" className="pb-3"/>
                
                <div className="d-flex flex-column flex-md-row pt-5 w-75">
                    <div className="col-12 col-md-4 d-flex flex-column ">
                        <div>
                            <img src={credit} alt="" className="w-100"/>
                            <div className="bg-white px-5 py-4 b-shadow2">
                                <h3 className="pb-2 font-weight-bold">ثبت نام حساب کاربری</h3>
                                <h6 className="m-0 text-center"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column mt-2 mt-md-0 ">
                        <div>
                            <img src={mail} alt="" className="w-100"/>
                            <div className="bg-white px-5 py-4 b-shadow2">
                                <h3 className="pb-2 font-weight-bold">تکمیل و ارسال مدارک</h3>
                                <h6 className="m-0 text-center"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column mt-2 mt-md-0 ">
                        <div>
                            <img src={shop} alt="" className="w-100"/>
                            <div className="bg-white px-5 py-4 b-shadow2">
                                <h3 className="pb-2 font-weight-bold">ثبت سفارش خرید</h3>
                                <h6 className="m-0 text-center"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h6>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
