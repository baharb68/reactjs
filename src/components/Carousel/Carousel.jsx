import React, {Component} from 'react';
import './Carousel.css';
import logo from '../img/logo.png';
import carousel1 from '../img/carousel1.jpg';
class Carousel extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
            <div className="container rtl">
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active position-relative">
                                <img src={carousel1} class="d-block w-100" alt="..." />
                                <div className="d-none d-md-flex flex-md-column d-md-block align-items-start position-absolute w-50">
                                    <h2 className="font-weight-bold">{this.props.title}</h2>
                                    <p className="text-right mt-3">{this.props.content}</p>
                                    <button className="mr-auto text-white mt-4">{this.props.buttontxt}<img src={this.props.btnicon} alt="" className="mr-2"/></button>
                                </div>
                            </div>
                            {/* <div class="carousel-item">
                            <img src={carousel2} class="d-block w-100 bg-white" alt="..." />
                            </div>
                            <div class="carousel-item">
                            <img src={carousel3} class="d-block w-100 bg-white" alt="..." />
                            </div> */}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
            </div>
        );
    }
}
export default Carousel;





