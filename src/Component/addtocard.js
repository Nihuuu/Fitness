import React from "react";
import '../Component/css/ecomm.css'
import { useState } from 'react';
//import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../assets/image/protein.jfif';
import img2 from '../assets/image/resistace.jfif';
import img3 from '../assets/image/kneeband.jfif';
import img4 from '../assets/image/weightgainer.jfif';
import img5 from '../assets/image/weights.jfif';
   
const product = [
    {
        id: 0,
        image: img1,
        title: 'Protein',
        price: 1200,
    },
    {
        id: 1,
        image: img2,
        title: 'Resistance band ',
        price: 700,
    },
    {
        id: 2,
        image: img3,
        title: 'Kneeband',
        price: 500,
    },
    {
        id: 3,
        image: img4,
        title: 'Weightgainer',
        price: 1200,
    },
     {
        id: 4,
        image: img5,
        title: 'Weights',
        price: 1500,
    }
    
];

export const Addtocard=()=>{
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="ecombody">
      <div className="ecomheader">
        <p style={{color:'#4f53b9',textAlign:'center'}}className="ecomlogo">E-Commerce</p>
        <div className="ecomcart">
         
          <p id="count">Bag : {cart.length}</p>
        </div>
      </div>
      <div className="ecomcontainer">
        <div id="ecomroot">
          {product.map((product, index) => (
            <div className='ecombox' key={product.id}>
              <div className='ecomimg-box'>
                <img className='images' src={product.image} alt={product.title} />
              </div>
              <div className='ecombottom'>
                <p>{product.title}</p>
                <h2 style={{fontSize: '20px',color: 'red'}}>$ {product.price}.00</h2>
                <button className="ecobutton" onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="ecomsidebar">
          <div className="ecomhead">
            <p>My Cart</p>
          </div>
          <div id="cartItem">
            {cart.length === 0 ? 'Your cart is empty' : cart.map((product, index) => (
              <div className='ecomcart-item' key={product.id}>
                <div className='row-img'>
                  <img className='rowimg' src={product.image} alt={product.title} />
                </div>
                <p style={{fontSize: '12px'}}>{product.title}</p>
                <h2 style={{fontSize: '20px',color: 'red'}}>$ {product.price}.00</h2>
                
              </div>
            ))}
          </div>
          <div className="ecomfoot">
            <h3>Total</h3>
            <h2 style={{fontSize: '20px',color: 'red'}} id="total">$ {cart.reduce((acc, cur) => acc + cur.price, 0)}.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
}


