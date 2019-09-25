import React, { Component } from 'react'
import './Services.css'
import cost from '../img/affordable.png'
import credit from '../img/credit-card.png'
import mail from '../img/mail-send.png'
import support from '../img/support.png'


export default class Services extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-md-row pt-3 pb-5">
                <div className=" col-12 col-md-3 p-0 pl-md-2 ">
                    <div className="parts bg-white  d-flex flex-row px-3 py-4">
                        <div className="col-9  d-flex flex-column text-right p-0 m-0">
                            <h2>قیمت های منصفانه</h2>
                            <h6 className="m-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از</h6>
                        </div>
                        <div className="col-3 p-0 w-100">
                            <img src={cost} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
                <div className=" col-12 col-md-3 p-0 px-md-2 mt-2 mt-md-0">
                    <div className="parts bg-white  d-flex flex-row px-3 py-4">
                        <div className="col-9  d-flex flex-column text-right p-0 m-0">
                            <h2>پرداخت امن درگاه بانکی</h2>
                            <h6 className="m-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از</h6>
                        </div>
                        <div className="col-3 p-0 w-100">
                            <img src={credit} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
                <div className=" col-12 col-md-3 p-0 px-md-2 mt-2 mt-md-0">
                    <div className="parts bg-white  d-flex flex-row px-3 py-4">
                        <div className="col-9  d-flex flex-column text-right p-0 m-0">
                            <h2>ارسال فوری</h2>
                            <h6 className="m-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از</h6>
                        </div>
                        <div className="col-3 p-0 w-100">
                            <img src={mail} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
                <div className=" col-12 col-md-3 p-0 pr-md-2 mt-2 m-md-0 mb-4">
                    <div className="parts bg-white  d-flex flex-row px-3 py-4">
                        <div className="col-9  d-flex flex-column text-right p-0 m-0">
                            <h2>پشتیبانی فوری</h2>
                            <h6 className="m-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از</h6>
                        </div>
                        <div className="col-3 p-0 w-100">
                            <img src={support} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
