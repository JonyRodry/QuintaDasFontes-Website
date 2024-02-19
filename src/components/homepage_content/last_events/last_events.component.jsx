import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";

import ph5 from "../../../assets/le_5.jpeg";
import ph6 from "../../../assets/le_6.jpeg";
import ph7 from "../../../assets/le_7.jpeg";
import ph8 from "../../../assets/le_8.jpeg";
import "./last_events.styles.scss";

function LastEvents() {

  const [goToSlide, setGoToSlide] = useState(0);
  const offsetRadius = 3;
  const showNavigation = true;

  console.log(config.slow);

  let slides = [
    {
      content: <img src="https://i.ibb.co/NrLB0P2/le-2.jpg" alt="le-2" border="0" />
    },
    {
      content: <img src="https://i.ibb.co/6wrnD85/le-1.jpg" alt="le-1" border="0" />
    },
    {
      content: <img src="https://i.ibb.co/bvtnFzj/le-3.jpg" alt="le-3" border="0" />
    },
    {
      content: <img src="https://i.ibb.co/Wcfr5vD/le-4.jpg" alt="le-4" border="0" />
      
    },
    {
      content: <img src="https://i.ibb.co/2KNMrWC/le-9.jpg" alt="le-9" border="0" />
    },
    {
     content: <img src="https://i.ibb.co/93Bcwhm/le-10.jpg" alt="le-10" border="0" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  return (
    <>
      <Row className="lastEvent-text-title">
          <text className="lastEvent-title">
              Últimos Eventos
          </text>
      </Row>

      <Row className="lastEvent-text-subtitle">
          <text className="lastEvent-subtitle">
              Casamentos
          </text>
      </Row>

      <div style={{ width: "80%", height: "500px", margin: "0 auto 100px auto" }}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config.slow}
          autoplay={true} 
          interval={1000} 
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

      <Row className="lastEvent-text-subtitle">
          <text className="lastEvent-subtitle">
              (Re)Descobrir 2023 - 7ª Edição
          </text>
      </Row>
      <div className="div-grid paddingHome">
          <div className="item-half-height heightHome">
          <img
              id="photos-col-img"
              src={ph5}
              alt='photos-col'
          />
        </div>
        <div className="item-half-height heightHome">
          <img
              id="photos-col-img"
              src={ph6}
              alt='photos-col'
          />
        </div>
        <div className="item-half-height heightHome">
          <img
              id="photos-col-img"
              src={ph7}
              alt='photos-col'
          />
        </div>
        <div className="item-half-height heightHome">
          <img
              id="photos-col-img"
              src={ph8}
              alt='photos-col'
          />
        </div>
      </div>
    </>
  );
}

export default LastEvents;