import React, { Component } from 'react'
import './Comment.css'
import Partstitle from '../Partstitle'
import seperator from '../img/seperator.png'
import user from '../img/user.png'
import Commentitem from './Commentitem'

export default class Comment extends Component {
    render() {
        return (
            <div className="d-flex">
                <div className="d-none d-md-block col-md-3"></div>
                <div className="col-12 col-md-6 d-flex flex-column align-items-center pt-5 px-0">
                    <Partstitle title="نظرات مشتریان" seperator={seperator}/>
                    <Commentitem name="نام و نام خانوادگی" skill="شغل و مهارت" comment=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای" profileimg={user} />
                </div>
                <div className="d-none d-md-block col-md-3"></div>
            </div>
        )
    }
}
