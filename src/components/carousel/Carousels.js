import React, { useState } from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PS3_image1 from "../../assets/kaju.png";
import PS3_image2 from "../../assets/kaju.png";

const Carousels = () => {
  const arrowStyles = {
    position: "absolute",
    bottom: "auto",
    // padding: ".4em",
    zIndex: 1,
    outline: "none",
    border: "none",
    backgroundColor: "inherit",
    fontSize: "55px",
    color: "#02569e",
    textShadow: "2px 1px 3px #02569e",
    top: "25%",
  };
  return (
    <>
      <Carousel
        className="outer-carousel"
        autoPlay={true}
        interval={5000}
        showArrows={true}
        infiniteLoop={false}
        showThumbs={false}
        showStatus={false}
        showDots={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                left: "2%",
              }}
            >
              <i class="fa fa-chevron-left"></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                right: "2%",
              }}
            >
              <i class="fa fa-chevron-right"></i>
            </button>
          )
        }
      >
        <div className="PS3-section">
          <div className="PS3-carousel">
            <img src={PS3_image2} className="PS3-carousel-image" alt="img1" />
          </div>
        </div>
        <div className="PS3-section">
          <div className="PS3-carousel">
            <img src={PS3_image1} alt="PS3_image1" />
          </div>
        </div>
        <div className="PS3-section">
          <div className="PS3-carousel">
            <img src={PS3_image1} alt="PS3_image1" />
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Carousels;
