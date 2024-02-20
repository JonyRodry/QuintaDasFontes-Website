import React from "react";
import { Row, Col } from "react-bootstrap";

import ph1 from "../../assets/igrejaVM.png";
import ph2 from "../../assets/lagaresMouros.png";
import ph3 from "../../assets/capelaColmeias.png";
import ph4 from "../../assets/baloiçoNespereira.png";

import "./lazer.styles.css";

function CulturaVM() {

  return (
        <>
            <Row className="lazer-row-title">
                <text className="lazer-title">
                    Cultura de Vila Maior
                </text>
            </Row>

            <Row className="lazer-cultura-fotos">    
                <Col md='3' className="lazer-cultura-foto-col">
                    <img
                        id="lazer-fotos-cultura-img"
                        src={ph1}
                        alt='photos-col'
                    />
                </Col>
                <Col md='3' className="lazer-cultura-foto-col cultura-text">
                    <text className="lazer-cultura-text">
                        Igreja Paroquial
                        <br/>de Vila Maior
                    </text>
                </Col>
                <Col md='3' className="lazer-cultura-foto-col">
                    <img
                        id="lazer-fotos-cultura-img"
                        src={ph2}
                        alt='photos-col'
                    />
                </Col>
                <Col md='3' className="lazer-cultura-foto-col cultura-text">
                    <text className="lazer-cultura-text">
                        Lagares dos Mouros
                    </text>
                </Col>
            </Row>

            <Row className="lazer-cultura-fotos sem-espaco">  
                <Col md='3' className="lazer-cultura-foto-col cultura-text">
                    <text className="lazer-cultura-text">
                        Capela da Nossa Senhora das Colmeias
                    </text>
                </Col>  
                <Col md='3' className="lazer-cultura-foto-col">
                    <img
                        id="lazer-fotos-cultura-img"
                        src={ph3}
                        alt='photos-col'
                    />
                </Col>
                <Col md='3' className="lazer-cultura-foto-col cultura-text">
                    <text className="lazer-cultura-text">
                        Baloiço de Nespereira Alta
                    </text>
                </Col>
                <Col md='3' className="lazer-cultura-foto-col">
                    <img
                        id="lazer-fotos-cultura-img"
                        src={ph4}
                        alt='photos-col'
                    />
                </Col>
            </Row>
        </>
    );
}

export default CulturaVM;
