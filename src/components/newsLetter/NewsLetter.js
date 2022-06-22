import React from "react";
import Footer from "../footer/Footer";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="NewsLetter-main">
        <h2 className="NewsLetter-heading">
          <span style={{ marginTop: "5%" }}>
            Subscribe to our newsletter !{" "}
          </span>
        </h2>
        <div className="NewsLetter-para-container">
          <p className="NewsLetter-para">
            Subscribe to our newsletter to get latest discount and offers
            updates.
          </p>
        </div>

        <div className="NewsLetter-search-main">
          <input
            className="NewsLetter-input-search"
            type="email"
            placeholder="Enter your email address"
          />
          <button class="NewsLetter-search-button">Subscribe</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsLetter;
