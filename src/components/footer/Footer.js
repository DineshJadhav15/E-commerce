import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-main">
      <div className="Footer-container">
        <div className="Footer-quick-links">
          <p className="quick-links">Quick links</p>
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Orders</li>
            <li>Wish List </li>
            <li>About Uss</li>
          </ul>
        </div>
        <div className="Footer-shop">
          <p className="shop">Shop</p>
          <ul>
            <li>DryFruits</li>
            <li>Berries</li>
            <li>Nuts</li>
            <li>Seeds</li>
          </ul>
        </div>
        <div className="Footer-company">
          <p className="company">Company</p>
          <ul>
            <li>Careers</li>
            <li>Shipping</li>
            <li>Terms & conditions</li>
            <li>Return Policies</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="Footer-get-in-touch">
          <p className="Getintouch">Get In touch</p>
          <ul>
            <li>
              <i
                class="fa fa-map-marker"
                style={{ marginRight: "5%" }}
                aria-hidden="true"
              ></i>
              Bandal Dhankude Plaza, <br /> Kothrud Pune-38 India.
            </li>
            <li>
              <i
                class="fa fa-phone"
                style={{ marginRight: "5%" }}
                aria-hidden="true"
              ></i>{" "}
              +91 8055888888/+91 9055555555
            </li>
            <li>
              <i
                class="fa fa-envelope "
                style={{ marginRight: "5%" }}
                aria-hidden="true"
              ></i>{" "}
              contact@scronuts.com
            </li>
          </ul>
        </div>
        <div className="Footer-company">
          <p className="Getintouch">Social Links</p>
          <div className="footer-social">
            <p>
              <i className="fa fa-instagram"></i>
            </p>
            <p>
              <i className="fa fa-facebook"></i>
            </p>
            <p>
              <i className="fa fa-twitter"></i>
            </p>
            <p>
              <i className="fa fa-linkedin"></i>
            </p>
          </div>
        </div>
      </div>
      <p className="Footer-copy-right">@ 2021-2022 SCRONUST.Pvt.Ltd </p>
    </div>
  );
};

export default Footer;
