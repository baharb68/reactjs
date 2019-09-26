import React, { Component } from 'react'
import './Services.css'
import Servicepart from './Servicepart'
import cost from '../img/affordable.png'
import credit from '../img/credit-card.png'
import mail from '../img/mail-send.png'
import support from '../img/support.png'


export default class Services extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-md-row pt-3 pb-5">
                <Servicepart title="قیمت های منصفانه" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از" serviceicon={cost} />
                <Servicepart title="پرداخت امن درگاه بانکی" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از" serviceicon={credit} />
                <Servicepart title="ارسال فوری" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از" serviceicon={mail} />
                <Servicepart title="پشتیبانی فوری" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از" serviceicon={support} />
            </div>
        )
    }
}
