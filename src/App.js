import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import 'vazir-font/dist/font-face.css';
import arrow from './components/img/arrow.png'
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Main from './components/Main/Main'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App bg-gray2">
      <div className="container-fluid p-0">
        <div className="top-header p-1 "></div>
        <div className="bg-white b-shadow">
          <Navbar />
        </div>
        <div className="">
          <Carousel  title="لورم اپیسوم متن ساختگی" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." buttontxt="همین حالا سفارش بده" btnicon={arrow}/>
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
