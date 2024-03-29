import React, { Component } from 'react'
import './Contactus.css'
import Contactustxt from './Contactustxt'
import Contactusbtn from './Contactusbtn'
import instagram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'
import telegram from '../img/telegram.png'


export default class Contactus extends Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center mt-4">
                <div className="d-flex flex-column flex-md-row w-75">
                    <Contactustxt title ="" text="ما هر روز از ساعت 9 تا 18 تو دفترمون هستیم و تقریبا 24 ساعته تو فضای مجازی آنلاینیم"/>
                    <Contactustxt title ="شماره تماس:" text="09131929394-0913192929 "/>
                    <Contactustxt title ="آدرس ما:" text="کرمان ، رفسنجان..."/>
                </div>
                <div className="d-flex flex-column flex-md-row">
                    <Contactusbtn btnicon={instagram} btntext="اینستاگرام ویزاکارت" /> 
                    <Contactusbtn btnicon={telegram} btntext="تلگرام ویزاکارت" /> 
                    <Contactusbtn btnicon={whatsapp} btntext="واتس آپ ویزاکارت" /> 
                </div>
            </div>
        )
    }
}
