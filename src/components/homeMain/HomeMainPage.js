import React from "react";
import "./HomeMainPage.css";
import kaju from "../../assets/kaju.png";
import Carousels from "../carousel/Carousels";

const HomeMainPage = () => {
  return (
    <>
      <div className="Ecom-home-main-page-container">
        <div className="Ecom-home-main">
          <div className="Ecom-home-main-content">
            <p className="Ecom-home-main-heading">
              Chala Kaju Badam Pista Khauya !
            </p>
            <p className="Ecom-home-main-para">
              loream In publishing and graphic design, Lorem ipsum is a place
              holder text commonly used to demonstrate the visual form of a
              document .
            </p>
            <p></p>
            <button className="Ecom-home-call-to-action">Shop Now</button>
          </div>
          <div className="Ecom-home-main-image-container">
            <div className="Ecom-home-background-circle2"></div>
            <img className="Ecom-home-main-image" src={kaju} alt="kaju" />
            {/* <p className="Ecom-home-main-image">
              <Carousels />
            </p> */}
          </div>
          <div className="Ecom-home-background-circle1"></div>
          <div className="Ecom-home-background-circle3"></div>
        </div>
      </div>
    </>
  );
};

export default HomeMainPage;
