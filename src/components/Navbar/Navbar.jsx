import React, {Component} from 'react';
import './Navbar.css';
import Li from './Li'
import Logo from '../logo/Logo'
import logo1 from '../img/logo.png'
class Navbar extends Component {
    render() { 
        return (
            <div className="container ">
                   <nav class="navbar navbar-expand-lg navbar-light justify-content-between px-0">
                        <a class="navbar-brand m-0" href="#">
                            <Logo logo={logo1} webname="VizaCart" webdesc="خدمات تبادل ارزهای مجازی"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul class="navbar-nav pr-0">
                                <Li link="خانه" className="active" />
                                <Li link="فروشگاه" />
                                <Li link="مراحل ثبت سفارش" />
                                <Li link="آموزش احراز هویت" />
                                <Li link="بلاگ" />
                                <Li link="درباره ما" />
                                <Li link="تماس با ما" />
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="px-3 py-1 text-gray">ورود / ثبت نام</a>
                            <a href="#" className="px-3 py-1 text-gray">سبد خرید</a>
                        </div>
                    </nav>
            </div>
        );
    }
}
export default Navbar;





