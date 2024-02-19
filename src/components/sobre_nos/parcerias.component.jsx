import React from "react";
import { Row } from "react-bootstrap";

import p1 from "../../assets/parceiros/patrocinador_1.png"
import p2 from "../../assets/parceiros/patrocinador_2.png"
import p3 from "../../assets/parceiros/patrocinador_3.png"
import p4 from "../../assets/parceiros/patrocinador_4.png"
import p5 from "../../assets/parceiros/patrocinador_5.png"
import p6 from "../../assets/parceiros/patrocinador_6.png"
import p7 from "../../assets/parceiros/patrocinador_7.png"
import p8 from "../../assets/parceiros/patrocinador_8.png"
import p9 from "../../assets/parceiros/patrocinador_9.png"
import p10 from "../../assets/parceiros/patrocinador_10.png"

import "./parcerias.styles.scss";

function Parcerias() {

  return (
    <>
        <Row className="parcerias-text-title">
            <text className="parcerias-title">
                Parcerias 
            </text>
        </Row>

        <Row className="grid-parcerias">
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p1}
                    alt='photos-col'
                />
            </div>
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p2}
                    alt='photos-col'
                />
            </div>
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p3}
                    alt='photos-col'
                />
            </div>
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p4}
                    alt='photos-col'
                />
            </div>
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p5}
                    alt='photos-col'
                />
            </div>
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p10}
                    alt='photos-col'
                />
            </div>
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p9}
                    alt='photos-col'
                />
            </div>
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p7}
                    alt='photos-col'
                />
            </div>
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p8}
                    alt='photos-col'
                />
            </div>
            <div className="col-parcerias">
                <img
                    id="parcerias-col-img"
                    src={p6}
                    alt='photos-col'
                />
            </div>
        </Row>
</>
    );
}

export default Parcerias;
