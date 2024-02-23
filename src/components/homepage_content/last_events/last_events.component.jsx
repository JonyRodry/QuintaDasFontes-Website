import React from "react";
import { Row } from "react-bootstrap";

import CarouselEventos from "./../carroussel/carroussel.component.jsx"
import {slidesCasamentos, slidesOutros} from "./../carroussel/images-caroussel.js"

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
        <Row className="lastEvent-text-subtitle">
            <text className="lastEvent-subtitle">
                Casamentos
            </text>
        </Row>
        
        <CarouselEventos slides={slidesCasamentos} />
      </div>
      
      <div className="hiddenLeftRight">
        <Row className="lastEvent-text-subtitle">
            <text className="lastEvent-subtitle">
                (Re)Descobrir 2023 - 7ª Edição
            </text>
        </Row>

        <CarouselEventos slides={slidesOutros} />
      </div>
    </>
  );
}

export default LastEvents;