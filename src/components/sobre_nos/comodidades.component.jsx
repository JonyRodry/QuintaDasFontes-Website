import React from "react";
import { Row, Col } from "react-bootstrap";

import ph1 from "../../assets/quinta_das_fontes-025.jpg"

import "./comodidades.styles.scss";

function Comodidades() {

  return (
    <>
        <Row className="comodidades-text-title">
            <text className="history-title">
                Comodidades 
            </text>
            <Col md={3} xs={4} className="comodidades-lista">
                <li>
                    4 Quartos, todos com cama de casal                    
                </li>
                <li>
                    Estacionamento nas instalações                  
                </li>
                <li>
                    3 casas de banho                   
                </li>
                <li>
                    Cozinha                   
                </li>
                <li>
                    Sala de estar                   
                </li>
            </Col>
            <Col md={3} xs={4} className="comodidades-lista">
                <li>
                    Wifi                  
                </li>
                <li>
                    Piscina Privada                 
                </li>
                <li>
                    Espaço exclusivo para trabalho               
                </li>
                <li>
                    Vista para as montanhas e vales                    
                </li>
                <li>
                    Mais inforamções, no nosso link do <a className="footer-list-link" href="https://www.airbnb.pt/rooms/45136485?_set_bev_on_new_domain=1686151434_MDkxYzhiYTNlOWVj&source_impression_id=p3_1686151434_iOkB3XJAAK5Cuse2" target="_blank"rel="noreferrer">Airbnb</a>                   
                </li>
            </Col>
            <div className="div-img">
                <img
                    id="photos-col-img"
                    src={ph1}
                    alt='photos-col'
                />
            </div>
        </Row>
    </>
    );
}

export default Comodidades;
