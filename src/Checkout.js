import React, { useState } from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
const[{basket},dispatch]=useStateValue();

  return (
    <div className="checkout">
        <div className='checkout_left'>
            <img className='checkout_ad' src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
        
        <div>
            <h2 className="checkout_tittle">Your Shoping Basket</h2>
           {basket.map(item=>(
             <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}  
            rating={item.rating}  />   
           ))}
        </div>
        </div>
        <div className="checkout_right">
          <Subtotal/>
          <h2>the subtotal will go here</h2>
        </div>
    </div>
  )
}

export default Checkout;