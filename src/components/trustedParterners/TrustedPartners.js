import React from "react";
import "./TrustedPartners.css";
import Livingfoodco from "../../assets/Living food co.png";
import Nuttygritties from "../../assets/Nutty gritties.png";
import Paperboat from "../../assets/Paper boat.png";
import PioneerOrchard from "../../assets/Pioneer Orchard.png";
import TrueElements from "../../assets/True elements.png";
import UrbanPlatter from "../../assets/Urban platter.png";
import ShopByCategory from "../shopByCategory/ShopByCategory";

const TrustedPartners = () => {
  return (
    <>
      <ShopByCategory />
      <div className="TrustedPartners-main">
        <h3 className="TrustedPartners-heading">Our trusted partners </h3>
        <div className="TrustedPartners-containers">
          <div className="TrustedPartners-wrapper1">
            <img
              className="TrustedPartners-images"
              src={Livingfoodco}
              alt="Livingfoodco"
            />
          </div>
          <div className="TrustedPartners-wrapper1">
            <img
              className="TrustedPartners-images"
              src={Paperboat}
              alt="Paperboat"
            />
          </div>
          <div className="TrustedPartners-wrapper1">
            <img
              className="TrustedPartners-images"
              src={Nuttygritties}
              alt="Nuttygritties"
            />
          </div>
          <div className="TrustedPartners-wrapper1">
            <img
              className="TrustedPartners-images"
              src={PioneerOrchard}
              alt="PioneerOrchard"
            />
          </div>
          <div className="TrustedPartners-wrapper1">
            <img
              className="TrustedPartners-images"
              src={TrueElements}
              alt="TrueElements"
            />
          </div>
          <div className="TrustedPartners-wrapper1">
            <img
              className="TrustedPartners-images"
              src={UrbanPlatter}
              alt="UrbanPlatter"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedPartners;
