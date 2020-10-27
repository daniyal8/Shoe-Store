import React from "react";
import Footer from './footer'
import img from './sliderimg4.png';
import shoe1 from './images/shoeimg1.jpg';
import shoe2 from './images/shoeimg2.jpg';
import shoe3 from './images/shoeimg3.jpg';
import './Home.css'
import ScrollAnimation from 'react-animate-on-scroll';


function Home() {
  return(
    <div>
      <h1 className="head">Shoe Store</h1>
      <ScrollAnimation animateIn='fadeIn'>
      <img className='img' src={img}/>
      </ScrollAnimation>
      <div className="newarrivals">
        <h1>New Arrivals</h1>
        <ScrollAnimation animateIn='wobble'>
        <img className="shoeimg" src={shoe1} />
        <img className="shoeimg" src={shoe2} />
        <img className="shoeimg" src={shoe3} />
        </ScrollAnimation>
      </div>
      <Footer />
   </div>
  );
}

export default Home;
