import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import { sliderData } from "./slider-data";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length;
  //slideLength= 1 2 3 4 5
  //currentSlide =0 1 2 3 4

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 8000;  // 8s

  const nextSlide = () => {
    setCurrentSlide(currentSlide === (slideLength - 1) ? 0 : currentSlide + 1); // we will go to next slide
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? (slideLength - 1) : (currentSlide - 1)); // we will go to next slide
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
     if (autoScroll) {
      auto();
     }
     return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
       <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
       <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

       {sliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
              {index === currentSlide && (
                <> 
                  <img src={slide.image} alt="slide" />
                  <div className="content">
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <button className="btn"> Take a bite! </button>

                  </div>
                </>
              )}
            </div>
          )
        })}
    </div>
  );
};

export default Slider;