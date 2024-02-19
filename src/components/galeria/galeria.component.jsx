import React from "react";
import { Row } from "react-bootstrap";

import banner from "../../assets/slideHome_1.jpg";

import p1 from "../../assets/grid1.jpg"
import p2 from "../../assets/slideHome_2.jpg"
import p3 from "../../assets/quinta_das_fontes-090.jpg"
import p4 from "../../assets/quinta_das_fontes-080.jpg"
import p5 from "../../assets/quinta_das_fontes-057.jpg"
import p6 from "../../assets/quinta_das_fontes-069.jpg"

import p7 from "../../assets/quinta_das_fontes-024.jpg"
import p8 from "../../assets/quinta_das_fontes-191.jpg"
import p9 from "../../assets/slideHome_6.jpg"
import p10 from "../../assets/quinta_das_fontes-161.jpg"
import p11 from "../../assets/quinta_das_fontes-136.jpg"
import p12 from "../../assets/slideHome_4.jpg"

import p13 from "../../assets/quinta_das_fontes-229.jpg"
import p14 from "../../assets/quinta_das_fontes-230.jpg"
import p15 from "../../assets/quinta_das_fontes-231.jpg"

import "./galeria.styles.scss";

function Galeria() {

  return (
    <>
        <section className="banner-container">
            <div className="over-opacity">
            <p>
                <h2 className="banner-text-title">Galeria</h2>
            </p>
            </div>
            <div className="banner-div">
            <img src={banner} id="banner-img" alt="banner"/>
            </div>
        </section>

        <Row className="parcerias-text-title">
            <text className="parcerias-title">
                Espaço Interior 
            </text>
        </Row>

        <Row className="grid-galeria">
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p1}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p2}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p3}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p4}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p5}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p6}
                    alt='photos-col'
                />
            </div>
        </Row>

        <Row className="parcerias-text-title">
            <text className="parcerias-title">
                Espaço Exterior 
            </text>
        </Row>

        <Row className="grid-galeria">
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p7}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p8}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p9}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p10}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p11}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria">
                <img
                    id="galeria-col-img"
                    src={p12}
                    alt='photos-col'
                />
            </div>
        </Row>

        <Row className="parcerias-text-title">
            <text className="parcerias-title">
                Eventos
            </text>
        </Row>

        <Row className="grid-galeria" id="grid-impar">
            <div className="col-galeria-ev">
                <img
                    id="galeria-col-img"
                    src={p13}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria-ev">
                <img
                    id="galeria-col-img"
                    src={p14}
                    alt='photos-col'
                />
            </div>
            <div className="col-galeria-ev">
                <img
                    id="galeria-col-img"
                    src={p15}
                    alt='photos-col'
                />
            </div>
        </Row>
    </>
    );
}

export default Galeria;
