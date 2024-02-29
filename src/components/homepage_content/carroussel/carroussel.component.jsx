import React, { useState } from "react";
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";

import "./carroussel.styles.scss";

function CarouselEventos(props){

  const [goToSlide, setGoToSlide] = useState(0);

  let slidesIn = props.slides.map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index)};
  });

  return(
    <div style={{ width: "80%", height: "450px", margin: "0 auto 100px auto" }}>
      <Carousel
        slides={slidesIn}
        goToSlide={goToSlide}
        offsetRadius={3}
        showNavigation={true}
        animationConfig={config.slow}
      />
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around"
        }}
      ></div>
    </div>
  );
} 

export default CarouselEventos;