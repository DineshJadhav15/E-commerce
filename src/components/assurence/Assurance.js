import React from "react";
import "./Assurance.css";

const Assurance = () => {
  return (
    <div className="Assurance-main">
      <div className="Assurance-container">
        <div className="Assurance-content">
          <p className="Assurance-content-icon">
            <i class="fa fa-check "></i>
          </p>
          <p className="Assurance-content-text-name">100% ORIGINAL</p>
          <p className="Assurance-content-text">
            All Products are original and go through strict quality check.
          </p>
        </div>

        <div className="Assurance-content">
          <p className="Assurance-content-icon">
            <i class="fa fa-truck"></i>
          </p>
          <p className="Assurance-content-text-name">SHIPPING</p>
          <p className="Assurance-content-text">
            All Products are original and go through strict quality check.
          </p>
        </div>

        <div className="Assurance-content">
          <p className="Assurance-content-icon">
            <i class="fa fa-rotate-left"></i>
          </p>
          <p className="Assurance-content-text-name">7 DAY RETURN</p>
          <p className="Assurance-content-text">
            All Products are original and go through strict quality check.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assurance;
