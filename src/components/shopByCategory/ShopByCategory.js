import React from "react";
import "./ShopByCategory.css";
import Nuts from "../../assets/Nuts.png";
import DryFruits from "../../assets/Dryfruits.png";
import Dates from "../../assets/Dates.png";
import Seeds from "../../assets/Seeds.png";

const ShopByCategory = () => {
  return (
    <div className="ShopByCategory-main">
      <h3 className="ShopByCategory-heading">Shop by Category</h3>
      <div className="ShopByCategory-card-container">
        <div className="ShopByCategory-card">
          <img className="ShopByCategory-card-image" src={DryFruits} alt="" />
          <p className="ShopByCategory-card-content"> Dry Fruits </p>
        </div>
        <div className="ShopByCategory-card">
          <img className="ShopByCategory-card-image" src={Seeds} alt="" />

          <p className="ShopByCategory-card-content"> Seeds</p>
        </div>
        <div className="ShopByCategory-card">
          <img className="ShopByCategory-card-image" src={Dates} alt="" />
          <p className="ShopByCategory-card-content"> Berries</p>
        </div>
        <div className="ShopByCategory-card">
          <img className="ShopByCategory-card-image" src={Nuts} alt="" />

          <p className="ShopByCategory-card-content"> Nuts</p>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
