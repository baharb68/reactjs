import React, { Component } from 'react'
import './Footer.css'
import Aboutus from '../aboutus/Aboutus'
import Contactus from '../contactus/Contactus'
import Li from '../Navbar/Li'


export default class Footer extends Component {
    render() {
        return (
            <div>
                 <div className="container-fluid bg-gray3">
                    <Aboutus  briefing="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." btntext="ارسال" formtitle="عضویت در خبرنامه"/>
                </div>
                <div className="container pb-4">
                    <Contactus />
                </div>
                <div className="container-fluid bg-white d-flex justify-content-center py-3">
                    <nav class="navbar navbar-expand-lg navbar-light justify-content-between px-0">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul class="navbar-nav pr-0">
                                <Li link="فروشگاه" />
                                <Li link="مراحل ثبت سفارش" />
                                <Li link="آموزش احراز هویت" />
                                <Li link="بلاگ" />
                                <Li link="درباره ما" />
                                <Li link="تماس با ما" />
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="end container-fluid d-flex justify-content-center text-white py-2">
                    <h6 className="m-0">حقوق این سایت متعلق است به ...</h6>
                </div>
                <div className="top-header p-1 "></div>
            </div>
        )
    }
}
