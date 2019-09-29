import React, { Component } from 'react'
import './Article.css'
import Articlepart from './Articlepart'
import seperator from '../img/seperator.png'
import Partstitle from '../Partstitle'
import hardfork1 from '../img/hardfork.jpg'
import hardfork2 from '../img/hardfork2.jpg'
import hardfork3 from '../img/hardfork(3).jpg'
import arrow2 from '../img/right-arrow.png'


export default class Article extends Component {
    render() {
        return (
            <div className="container d-flex flex-column align-items-center pb-5 pt-3">
                <Partstitle title="آخرین مقالات" seperator={seperator}/>
                <div className="d-flex flex-column flex-md-row mt-5 w-75">
                    <Articlepart photo={hardfork1} date="7 مهر 98" title="معرفی هاردفورک رمز ارزها" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه ." btnicon={arrow2} />
                    <Articlepart photo={hardfork3} date="7 مهر 98" title="معرفی هاردفورک رمز ارزها" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه ." btnicon={arrow2} />
                    <Articlepart photo={hardfork2} date="7 مهر 98" title="معرفی هاردفورک رمز ارزها" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه ." btnicon={arrow2} />
                </div>
            </div>
        )
    }
}
