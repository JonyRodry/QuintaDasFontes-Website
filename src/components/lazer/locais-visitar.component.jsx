import React from "react";
import { Row, Col } from "react-bootstrap";

import banner from "../../assets/slideHome_1.jpg";
import iconPM from "../../assets/icon-placemarker.png";
import ph1 from "../../assets/saoMacario.jpg";
import ph2 from "../../assets/aldeiaPena.jpg";
import ph3 from "../../assets/poçoAzul.png";
import ph4 from "../../assets/parqueCidade.jpg";
import ph5 from '../../assets/tipo3.jpg'
import ph6 from '../../assets/baloiçoArada.jpg'

import "./lazer.styles.css";

function LocaisVisitar() {

  return (
        <>
            <section className="banner-container">
                <div className="over-opacity">
                <p>
                    <h2 className="banner-text-title">Lazer e Experiências</h2>
                </p>
                </div>
                <div className="banner-div">
                <img src={banner} id="banner-img" alt="banner"/>
                </div>
            </section>
            <Row className="lazer-row-title">
                <text className="lazer-title">
                    Locais a visitar
                </text>
            </Row>
            <Row className="lazer-locais-fotos">    
                <Col md='6'>
                    <img
                        id="lazer-fotos-img"
                        src={ph1}
                        alt='photos-col'
                    />
                    <Row className="lazer-locais-description">
                        <Col xs='2' md='2' id='col-icon-maps'>
                            <img
                                src={iconPM}
                                alt='photos-col'
                                height={"25px"}
                            />
                        </Col>
                        São Macário, São Pedro do Sul
                    </Row>
                </Col>
                <Col md='6'>
                    <img
                        id="lazer-fotos-img"
                        src={ph2}
                        alt='photos-col'
                    />
                    <Row className="lazer-locais-description">
                        <Col xs='1' md='2' id='col-icon-maps'>
                            <img
                                src={iconPM}
                                alt='photos-col'
                                height={"25px"}
                            />
                        </Col>
                        <a className="lazer-locais-link" href="https://www.google.com/maps/dir//Aldeia+da+Pena+S%C3%A3o+Pedro+do+Sul/@40.8757775,-8.061877,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd235c8a48716e75:0xee3d86839297aa79" target="_blank"rel="noreferrer">
                            Aldeia da Pena, São Pedro do Sul
                        </a>
                    </Row>
                </Col>
            </Row>
            <Row className="lazer-locais-fotos">    
                <Col md='6'>
                    <img
                        id="lazer-fotos-img"
                        src={ph3}
                        alt='photos-col'
                    />
                    <Row className="lazer-locais-description">
                        <Col xs='2' md='2' id='col-icon-maps'>
                            <img
                                src={iconPM}
                                alt='photos-col'
                                height={"25px"}
                            />
                        </Col>
                        <a className="lazer-locais-link" href="https://www.google.com/maps/dir//Po%C3%A7o+Azul+CM1238+123/@40.7786491,-8.1643703,14.66z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2369ba0967ce43:0x42f9f52714e45b81!2m2!1d-8.1647894!2d40.781018?entry=ttu" target="_blank"rel="noreferrer">
                            Poço Azul, Santa Cruz da Trapa
                        </a>
                    </Row>
                </Col>
                <Col md='6'>
                    <img
                        id="lazer-fotos-img"
                        src={ph4}
                        alt='photos-col'
                    />
                    <Row className="lazer-locais-description">
                        <Col xs='1' md='2' id='col-icon-maps'>
                            <img
                                src={iconPM}
                                alt='photos-col'
                                height={"25px"}
                            />
                        </Col>
                        <a className="lazer-locais-link" href="https://www.google.com/maps/dir//Parque+Urbano+das+Nogueiras,+S%C3%A3o+Pedro+do+Sul/@40.7589243,-8.064294,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2343eae9bbbbe5:0x9a6032c3392bc83b!2m2!1d-8.059105!2d40.7589904?entry=ttu" target="_blank"rel="noreferrer">
                            Parque da Cidade, São Pedro do Sul
                        </a>
                        </Row>
                </Col>
            </Row>
            <Row className="lazer-locais-fotos">    
                <Col md='6'>
                    <img
                        id="lazer-fotos-img"
                        src={ph5}
                        alt='photos-col'
                    />
                    <Row className="lazer-locais-description">
                        <Col xs='2' md='2' id='col-icon-maps'>
                            <img
                                src={iconPM}
                                alt='photos-col'
                                height={"25px"}
                            />
                        </Col>
                        <a className="lazer-locais-link" href="https://www.google.com/maps/dir//Termas+de+S%C3%A3o+Pedro+do+Sul,+S%C3%A3o+Pedro+do+Sul/@40.7393345,-8.1340183,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd23419e6b3a7687:0xe61a24ad81fb6642!2m2!1d-8.0928189!2d40.7393418?entry=ttu" target="_blank"rel="noreferrer">
                            Termas de São Pedro do Sul
                        </a>
                    </Row>
                </Col>
                <Col md='6'>
                    <img
                        id="lazer-fotos-img"
                        src={ph6}
                        alt='photos-col'
                    />
                    <Row className="lazer-locais-description">
                        <Col xs='1' md='2' id='col-icon-maps'>
                            <img
                                src={iconPM}
                                alt='photos-col'
                                height={"25px"}
                            />
                        </Col>
                        <a className="lazer-locais-link" href="https://www.google.com/maps/dir//Parque+Urbano+das+Nogueiras,+S%C3%A3o+Pedro+do+Sul/@40.7589243,-8.064294,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2343eae9bbbbe5:0x9a6032c3392bc83b!2m2!1d-8.059105!2d40.7589904?entry=ttu" target="_blank"rel="noreferrer">
                            Serra da Arada, São Pedro do Sul
                        </a>
                        </Row>
                </Col>
            </Row>
        </>
    );
}

export default LocaisVisitar;
