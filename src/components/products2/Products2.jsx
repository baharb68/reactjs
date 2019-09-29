import React, { Component } from 'react'
import './Products2.css'
import seperator from '../img/seperator.png'
import paypal2 from '../img/paypal2.png'
import heart from '../img/heart.png'
import Partstitle from '../Partstitle'
import Products2item from './Products2item'

export default class Products2 extends Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center mt-5">
              <Partstitle title="مجصولات ما" seperator={seperator}/>
              <div className="d-flex flex-column flex-md-row mt-5 w-75">
                  <Products2item icon={paypal2} name="PayPal" title="ووجر-پرفکت-مانی-دلار" content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای" cost="15120" likeicon={heart} />
                  <Products2item icon={paypal2} name="PayPal" title="ووجر-پرفکت-مانی-دلار" content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای" cost="15120" likeicon={heart} />
                  <Products2item icon={paypal2} name="PayPal" title="ووجر-پرفکت-مانی-دلار" content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای" cost="15120" likeicon={heart} />
              </div>
            </div>
        )
    }
}
