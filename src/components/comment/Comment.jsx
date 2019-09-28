import React, { Component } from 'react'
import './Comment.css'
import Partstitle from '../Partstitle'
import seperator from '../img/seperator.png'
import user from '../img/user.png'

export default class Comment extends Component {
    render() {
        return (
            <div className="w-50 d-flex flex-column align-items-center pt-5 mx-auto">
                <Partstitle title="نظرات مشتریان" seperator={seperator}/>
                <div className="comment  position-relative d-flex flex-column justify-content-center text-right bg-white my-5  w-75 p-4">
                    <h2 className="font-weight-bold">نام</h2>
                    <h3>شغل</h3>
                    <p className="text-justify m-0"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای</p>
                    <img src={user} alt="" className="position-absolute"/>
                </div>

            </div>
        )
    }
}
