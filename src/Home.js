import React from "react";
import "./Home.css";
import Product from "./Product";
// import Header from "./Header";

function Home() {
  return (
    <>
    
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/July/GW/Weights/V1/3000x1200_1._CB633252119_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="Up to 70% off | Clearance store"
            id="5664125845"
            price="500"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/retail/Option3_379x304_2._SY304_CB634999885_.jpg"
            rating={5}
          />
          <Product
            title="Up to 70% off | Clearance store"
            price="500"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/retail/Option3_379x304_2._SY304_CB634999885_.jpg"
            rating={5}
          />
          <Product
            title="Up to 70% off | Clearance store"
            price="500"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/retail/Option3_379x304_2._SY304_CB634999885_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="Up to 70% off | Clearance store"
            price="500"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            rating={5}
          />
          <Product
            title="Up to 70% off | Clearance store"
            price="500"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            rating={5}
          />
          <Product
            title="Up to 70% off | Clearance store"
            price="500"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="Up to 70% off | Clearance store"
            price="500"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
