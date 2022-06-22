import React, { useState, useEffect } from "react";
import { Carousel } from "3d-react-carousal";
import kaju from "../../assets/kaju.png";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([
    {
      image: "image1",
      testimonialsTitle:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
      testimonialName: "testimonial Name1",
    },
    {
      image: "image2",
      testimonialsTitle:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
      testimonialName: "testimonial Name2",
    },
    {
      image: "image3",
      testimonialsTitle:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
      testimonialName: "testimonial Name3",
    },
    {
      image: "image4",
      testimonialsTitle:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
      testimonialName: "testimonial Name4",
    },
  ]);

  let slides;

  testimonial && testimonial.length > 0
    ? (slides = testimonial.map((data, index) => {
        return (
          <div className="slider-card" key={index}>
            {/* <div className="slider-img-container">
              <img className="slider-image" src={kaju} alt="testImg" />
            </div> */}

            <p className="slider-heading">{data.testimonialsTitle}</p>

            <p className="slider-para">{data.testimonialName}</p>
            <p className="slider-para-contenet"> CEO of SCRONUTS</p>
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
          arrows={true}
        />
      </div>
    </>
  );
};

export default Testimonials;
