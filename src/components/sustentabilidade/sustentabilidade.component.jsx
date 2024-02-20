import React from "react";
import { Row, Col } from "react-bootstrap";

import banner from "../../assets/slideHome_1.jpg";
import certificado from "../../assets/certificadoSus.png";
import ph1 from "../../assets/quinta_das_fontes-129.jpg";
import ph2 from "../../assets/gatos1.jpeg";
import ph3 from "../../assets/gatos2.jpeg";
import ph4 from "../../assets/burro.jpeg";

import "./sustentabilidade.styles.css";

function Sustentabilidade() {

    return (
      <>
            <section className="banner-container">
                <div className="over-opacity">
                <h2 className="banner-text-title">Sustentabilidade</h2>
                </div>
                <div className="banner-div">
                <img src={banner} id="banner-img" alt="banner"/>
                </div>
            </section>
            <Row className="sus-certificado">
                <img src={certificado} id="certificado-img" alt="banner"/>
            </Row>
            <Row className="inicial-text sus">
                <Col md='6' className="sus-lista">
                    <li>
                        Olival com cerca de 400 oliveiras para produção 
                        de azeite
                    </li>
                    <li>
                        Vários hectares recheados de grandes arvores como, 
                        pinheiros, carvalhos, sobreiros, medronheiros, 
                        castanheiros, cerejeiras, nogueiras e muitas outras.
                    </li>
                    <li>
                        Bicicletas
                    </li>
                    <li>
                        Redutores de água
                    </li>
                    <li>
                        Ecopontos para reciclagem
                    </li>
                </Col>
                <Col md='6' className="sus-lista">
                    <li>
                        Fontes e lagos para aproveitamento da água das 
                        nascentes existentes na quinta 
                    </li>
                    <li>
                        Painéis solares
                    </li>
                    <li>
                        Oleão de óleos alimentares
                    </li>
                    <li>
                        Compostagem
                    </li>
                    <li>
                        Hotel para insetos
                    </li>
                    <li>
                        Ninhos para os passarinhos
                    </li>
                </Col>
            </Row>

            <Row className="sus-fotos">
                <Col md='6' className="sus-fotos-col">
                    <Row className="sus-fotos-row">
                        <img
                            id="sus-img"
                            src={ph1}
                            alt='photos-col'
                        />
                    </Row>
                    <Row className="sus-fotos-row down">
                        <img
                            id="sus-img"
                            src={ph2}
                            alt='photos-col'
                        />
                    </Row>
                </Col>
                <Col md='6' className="sus-fotos-col">
                    <Row className="sus-fotos-row">
                    <img
                        id="sus-img"
                        src={ph3}
                        alt='photos-col'
                    />
                    </Row>
                    <Row className="sus-fotos-row down">
                    <img
                        id="sus-img"
                        src={ph4}
                        alt='photos-col'
                    />
                    </Row>
                </Col>
            </Row>
      </>
    );
}

export default Sustentabilidade;
