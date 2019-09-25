import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import 'vazir-font/dist/font-face.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App bg-gray2">
      <div className="container-fluid p-0">
        <div className="top-header p-1 "></div>
        <div className="bg-white b-shadow">
          <Navbar />
        </div>
        <div className=" pb-5">
          <Carousel />
          <Main />
        </div>

      </div>

    </div>
  );
}

export default App;
