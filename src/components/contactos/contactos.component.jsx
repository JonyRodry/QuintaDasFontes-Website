import React from "react";
import { Col, Row } from "react-bootstrap";
import banner from "../../assets/slideHome_1.jpg";
import cellphone from '../../assets/icon-phone.png';
import pin from '../../assets/icon-pin.png';
import email from '../../assets/icon-email.png';

import MapsForm from "./boxSendEmailMaps.component"

import "./contactos.styles.scss";

function Contactos() {
  
    return (
        <>
            <section className="banner-container">
                <div className="over-opacity">
                <p>
                    <h2 className="banner-text-title">Contactos</h2>
                </p>
                </div>
                <div className="banner-div">
                <img src={banner} id="banner-img" alt="banner"/>
                </div>
            </section>

            <Row className="history-text-title" id="contactos-div">
                <Row className="row-contactos" id="with-mb">
                    <Col md='1' xs='1' className="icons-contactos">
                        <img
                            id="logo-lk"
                            src={cellphone}
                            width="40px"
                            height="40px"
                            alt="logo-lk"
                        />
                    </Col>
                    <Col md='10' xs='10'>
                        <text className="history-title" id="contactos-text">
                            932 452 712
                        </text>
                    </Col>
                </Row>
                <Row className="row-contactos" id="with-mb">
                    <Col md='1' xs='1' className="icons-contactos">
                        <img
                            id="logo-lk"
                            src={email}
                            width="40px"
                            height="40px"
                            alt="logo-lk"
                        />
                    </Col>
                    <Col md='10' xs='10'>
                        <text className="history-title" id="contactos-text">
                            quintadasfontes2020@gmail.com
                        </text>
                    </Col>
                </Row>
                <Row className="row-contactos">
                    <Col md='1' xs='1' className="icons-contactos">
                        <img
                            id="logo-lk"
                            src={pin}
                            width="40px"
                            height="40px"
                            alt="logo-lk"
                        />
                    </Col>
                    <Col md='10' xs='10'>
                        <text className="history-title" id="contactos-text">
                            Rua da Estercada, nº9, 3660-709, Vila Maior, São Pedro do Sul
                        </text>
                    </Col>
                </Row>
            </Row>

            <MapsForm/>
        </>
    );
}

export default Contactos;