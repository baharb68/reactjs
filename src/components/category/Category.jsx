import React, { Component } from 'react'
import './Category.css'
import seperator from '../img/seperator.png'
import steam from '../img/steam.png'
import paypal from '../img/paypal.png'
import playstation from '../img/playstation.png'
import webmoney from '../img/webmoney.png'
import pm from '../img/pm.png'
import apple from '../img/apple.png'
import arrow from '../img/arrow.png'
import Partstitle from '../Partstitle'
import Categoryitem from './Categoryitem'

export default class Category extends Component {
    render() {
        return (
            <div classname="d-flex flex-column align-items-center">
                <Partstitle title="دسته بندی ها" seperator={seperator}/>
                <div className="w-75 d-flex flex-column flex-md-row flex-wrap  mx-auto pb-5">
                    <Categoryitem icon={pm} name="PerfectMoney" title="پرفکت مانی"  content="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و" btntext="ثبت سفارش" btnicon={arrow}/>
                    <Categoryitem icon={webmoney} name="Web Money" title="وب مانی"  content="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و" btntext="ثبت سفارش" btnicon={arrow}/>
                    <Categoryitem icon={steam} name="S T E A M" title="استیم"  content="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و" btntext="ثبت سفارش" btnicon={arrow}/>
                    <Categoryitem icon={apple} name="Apple" title="اپل"  content="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و" btntext="ثبت سفارش" btnicon={arrow}/>
                    <Categoryitem icon={paypal} name="PayPal" title="پی پال"  content="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و" btntext="ثبت سفارش" btnicon={arrow}/>
                    <Categoryitem icon={playstation} name="PlayStation" title="پلی استیشن"  content="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و" btntext="ثبت سفارش" btnicon={arrow}/>
                </div>
            </div>
        )
    }
}
