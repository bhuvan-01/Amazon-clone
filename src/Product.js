import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {
  const [state, dispatch,basket] = useStateValue();
  console.log("this is the basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        tittle: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };


return (
  <div className="product">
    <div className="product_info">
      <p> {title}</p>
      <p className="product-price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>🌟</p>
          ))}
      </div>
      <div>
        <img src={image} alt="" />
        <button onClick={addToBasket}> Add to Basket</button>
      </div>
    </div>
  </div>
);
          }
export default Product;
