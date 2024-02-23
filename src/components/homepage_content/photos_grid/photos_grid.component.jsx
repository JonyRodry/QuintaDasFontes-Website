import React from "react";
import { Row, Col } from "react-bootstrap";

import g1 from "../../../assets/quinta_das_fontes-01.jpg";
import g2 from "../../../assets/grid4.jpg";
import g3 from "../../../assets/slideHome_4.jpg";

import "./photos_grid.styles.css";
import {cssAnimations} from '../../../scripts.js';

function PhotosGrid() {

    window.addEventListener("scroll", cssAnimations);

    return (
        <div className="hiddenBottomTop" id="photos-grid-div">
            <Row className="photos-grid-row">
                <Col className="photos-grid-col">
                    <img
                        id="photos-grid-img"
                        src={g1}
                        alt='grid-photos'
                    />
                </Col>
                <Col className="photos-grid-col">
                    <img
                        id="photos-grid-img"
                        src={g2}
                        alt='grid-photos'
                    />
                </Col>
                <Col className="photos-grid-col">
                    <img
                        id="photos-grid-img"
                        src={g3}
                        alt='grid-photos'
                    />
                </Col>
            </Row>
            <Row className="photos-grid-btn-row">
                <a href="/galeria" className="photos-grid-text-href">
                    <button className="photos-grid-btn-more" >
                        VER MAIS FOTOS
                    </button>
                </a>
            </Row>
        </div>
    );
};

export default PhotosGrid;
