import React from "react";
import "./StoryPage.css";
import Ourstory from "../../assets/Ourstory.png";

const StoryPage = () => {
  return (
    <div className="storyPage-main">
      <div className="storyPage-image-container">
        <img className="storyPage-image" src={Ourstory} alt="" />
      </div>
      <div className="storyPage-content">
        <div className="storyPage-content-name-container">
          <p className="storyPage-content-name"> Our Story</p>
          <p className="storyPage-content-para">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a abc
            abcabc abc abc typeface without relying on meaningful content. Lorem
            ipsum may be used as a placeholder before final copy is
            available.Lorem ipsum may be used as a placeholder before final copy
            is available.
          </p>
          <p className="storyPage-content-read-more">Read more</p>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
