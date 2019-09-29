import React, { Component } from 'react'
import './Main.css'
import logo1 from '../img/logo.png'
import Services from '../services/Services'
import Orderp from  '../OrderProcess/OrderP'
import Category from '../category/Category'
import Products2 from '../products2/Products2'
import Comment from '../comment/Comment'
import Article from '../article/Article'
import Aboutus from '../aboutus/Aboutus'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="container pt-5">
                    <Services /> 
                </div>
                <div className="container-fluid world-bg mt-5">
                    <Orderp />
                </div>
                <div className="container mt-5 ">
                    <Category />
                    <Products2 />
                </div>
                <div className="container-fluid comment-bg mt-5 pt-3 pb-5">
                    <Comment />
                </div>
                <div className="container-fluid article-bg py-5">
                    <Article />
                </div>
                <div className="container-fluid bg-gray3">
                    <Aboutus logo={logo1} webname="VizaCart" webdesc="خدمات تبادل ارزهای مجازی" briefing="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." btntext="ارسال"/>
                </div>
            </div>
        )
    }
}

