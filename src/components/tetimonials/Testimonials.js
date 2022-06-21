import React, { useState, useEffect } from "react";
import { Carousel } from "3d-react-carousal";
// import firebase from "../../firebase/Firebase";
import kaju from "../../assets/kaju.png";
import "./Testimonials.css";

const Testimonials = () => {
  // const db = firebase.firestore();

  const [testimonial, setTestimonial] = useState([
    {
      image: "image1",
      testimonialsTitle: "testimonialsTitle1",
      testimonialsDesp: "testimonialsDesp1",
    },
    {
      image: "image2",
      testimonialsTitle: "testimonialsTitle2",
      testimonialsDesp: "testimonialsDesp2",
    },
    {
      image: "image3",
      testimonialsTitle: "testimonialsTitle3",
      testimonialsDesp: "testimonialsDesp3",
    },
    {
      image: "image4",
      testimonialsTitle: "testimonialsTitle4",
      testimonialsDesp: "testimonialsDesp4",
    },
    {
      image: "image5",
      testimonialsTitle: "testimonialsTitle5",
      testimonialsDesp: "testimonialsDesp5",
    },
  ]);

  let slides;

  testimonial && testimonial.length > 0
    ? (slides = testimonial.map((data, index) => {
        return (
          <div className="slider-card" key={index}>
            <div className="slider-img-container">
              <img className="slider-image" src={kaju} alt="testImg" />
            </div>

            <p className="slider-heading">{data.testimonialsTitle}</p>

            <p className="slider-para">{data.testimonialsDesp}</p>
          </div>
        );
      }))
    : (slides = []);
  const callback = function (index) {};

  return (
    <>
      <div className="testimonials-container">
        <div className="testimonials-heading-container">
          <div>
            <h2 className="testimonials-heading">
              Don't take our word for it !
            </h2>
            <p className="testimonials-para">
              See what ScroNuts customers are saying
            </p>
          </div>
        </div>
        <Carousel
          slides={slides}
          autoplay={true}
          interval={5000}
          onSlideChange={callback}
        />
      </div>
    </>
  );
};

export default Testimonials;
