import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer'
import './../App.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Shoes from './../Shoe.json'

function Product() {

  return (
      <div>
          <h1 className="heading">Products</h1>
                  <ScrollAnimation animateIn='bounceInRight'>
          <div className="productContainer">
              {Object.keys(Shoes).map(keyName=>{
                  const shoe = Shoes[keyName];
                  return (
                      <Link key={keyName} 
                          className="link" 
                          to={`/product/${keyName}`}>
                              <h4 className="name">{shoe.name}</h4>
                              <img src={shoe.img} height={150} alt="shoe" />
                              <button className="button">Veiw Product</button>
                  </Link>
              )})}
          </div>
              </ScrollAnimation>
              <Footer/>
      </div>
  );
}
export default Product;
