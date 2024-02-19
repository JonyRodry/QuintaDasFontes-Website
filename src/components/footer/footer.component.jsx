import React from "react";
import { Row, Col } from "react-bootstrap";

import logo from "../../assets/logo_qf.png";
import fb from "../../assets/icon-facebook.svg";
import insta from "../../assets/icon-instagram.svg";
import booking from "../../assets/icon-booking.svg";
import airbnb from "../../assets/icon-airbnb.png";
import logoBiosphere from "../../assets/logo-biosphere.png"

import "./footer.styles.scss";

const Footer = () => {

  return (
    <div className="footer">
      <Row id="footer-desktop">
        <Col md={2} xs='12' className="logo-social">
          <Row>
            <Col md={12} className="footer-desktop-logo">
              <img
                src={logo}
                width="100px"
                height="100px"
                alt="logo"
              />
            </Col>
          </Row>
          <Row className="footer-social-icons">
            <Col md={1} xs='1' className="footer-icons-col">
              <a href="https://www.facebook.com/QuintadasFontesTurismo" target="_blank" rel="noreferrer">
                <img src={fb} width="30px" height="30px" alt="logo" />
              </a>
            </Col>
            <Col md={1} xs='1' className="footer-icons-col">
              <a href="https://www.instagram.com/quintadasfontes_sps/" target="_blank"rel="noreferrer">
                <img src={insta} width="30px" height="30px" alt="logo"/>
              </a>
            </Col>
            <Col md={1} xs='1' className="footer-icons-col">
              <a href="https://www.booking.com/hotel/pt/quinta-das-fontes-alojamento-rustico-local-e-turismo-rural-seguranca-conforto-e.pt-pt.html" target="_blank"rel="noreferrer">
                <img src={booking} width="24px" height="24px" alt="logo"/>
              </a>
            </Col>
            <Col md={1} xs='1' className="footer-icons-col">
              <a href="https://www.airbnb.pt/rooms/45136485?_set_bev_on_new_domain=1686151434_MDkxYzhiYTNlOWVj&source_impression_id=p3_1686151434_iOkB3XJAAK5Cuse2" target="_blank"rel="noreferrer">
                <img src={airbnb} width="30px" height="30px" alt="logo"/>
              </a>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="footer-contactos">
          <Row className="footer-list-title">CONTACTOS</Row>
          <Row className="footer-list">
            <text className="footer-list-text">
              +351 918 643 461
            </text>
          </Row>
          <Row className="footer-list">
            <text className="footer-list-text">
              +351 927 436 553
            </text>
          </Row>
          <Row className="footer-list">
            <text className="footer-list-text">
              quintadasfontes2020@gmail.com
            </text>
          </Row>
          <Row className="footer-list">
            <text className="footer-list-text">
              Rua da Estercada, nº9, 3660-709, Vila Maior, São Pedro do Sul
            </text>
          </Row>
        </Col>
        <Col md={2} xs='5' className="footer-contactos semPaddLeft">
          <Row className="footer-list-title">
            <a href="/" className="footer-list-link">
              HOMEPAGE
            </a>
          </Row>  
          <Row className="footer-list-title">
            <a href="/sobre-nos" className="footer-list-link">
              SOBRE NÓS
            </a>
          </Row>
          <Row className="footer-list-title">
            <a href="/" className="footer-list-link">
              SERVIÇOS
            </a>
          </Row>
          <Row className="footer-list-title">
            <a href="/" className="footer-list-link">
              CONTACTOS
            </a>
          </Row>
          <Row className="footer-list-title">
            <a href="/" className="footer-list-link">
              GALERIA
            </a>
          </Row>
        </Col>
        <Col md={2} xs='7' className="footer-contactos semPadd">
          <Row className="footer-list-title">
            <a href="/" className="footer-list-link">
              SITES DE RESERVA
            </a>
          </Row>  
          <Row className="footer-list-title">
            <a href="/sustentabilidade" className="footer-list-link">
              SUSTENTABILIDADE
            </a>
          </Row>
          <Row className="footer-list-title">
            <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank"rel="noreferrer" className="footer-list-link">
              LIVRO DE RECLAMAÇÕES
            </a>
          </Row>
          <Row className="footer-list-title">
            <a href="/" className="footer-list-link">
              POLÍTICA DE PRIVACIDADE
            </a>
          </Row>
          <Row className="footer-list-title">
            <a href="/" className="footer-list-link">
              POLÍTICA DE COOKIES
            </a>
          </Row>
        </Col>
        <Col md={2} className="footer-contactos logoBiosphere">
          <img src={logoBiosphere} width="120px" height="200px" alt="logo"/>
        </Col>
      </Row>

      <Row className="footer-desktop-copyright">
        <Col className="footer-list-text" onClick={() => window.open("https://www.linkedin.com/in/joaommrodrigues99/", "_blank")}>
          Copyright © 2023, Quinta das Fontes - Turismo, developed by João Rodrigues
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
