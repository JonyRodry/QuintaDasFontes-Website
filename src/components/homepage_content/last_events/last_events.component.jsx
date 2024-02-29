import React from "react";
import { Row } from "react-bootstrap";

import CarouselEventos from "./../carroussel/carroussel.component.jsx"
import {slidesEventosHome} from "./../carroussel/images-caroussel.js"

import "./last_events.styles.css";
import {cssAnimations} from '../../../scripts.js';

function LastEvents() {

  window.addEventListener("scroll", cssAnimations);

  return (
    <>
      <Row className="lastEvent-text-title">
          <text className="hiddenLeftRight lastEvent-title">
              Últimos Eventos
          </text>
      </Row>

      <div className="hiddenLeftRight">        
        <CarouselEventos slides={slidesEventosHome} />
      </div>
    </>
  );
}

export default LastEvents;