import React from 'react';
import { useParams } from 'react-router-dom';
import './Home.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Shoes from './../Shoe.json';

function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <ScrollAnimation animateIn='fadeIn'>
             <div className="head"><h1 className="text">{shoe.name}</h1></div>
             <div className="container">
            <div className="Cart">
                <img src={shoe.img} height={500} alt="shoe" />
                <div className="description">
                <h1>Price: ${shoe.Price}</h1>
                <h1>Color Family: Mix</h1>
                <h1>Select Size:</h1>
                <div className="size">
                <h3 className="value">US 5.5</h3>
                <h3 className="value">US 6</h3>
                <h3 className="value">US 7</h3>
                <h3 className="value">US 8</h3>
                <h3 className="value">US 9</h3>
                </div>
                <button className="add-to-cart">Add To Cart</button>
                </div>
          </div>  
          </div>        
          </ScrollAnimation> 
            </div>
    
    );
}

export default ProductItem;