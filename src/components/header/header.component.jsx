import React, { useState } from "react";
import { Col, Row, Offcanvas } from "react-bootstrap";
import { useLocation } from 'react-router-dom';

import logo from "../../assets/logo_qf_2.png";
import logo2 from "../../assets/logo_qf.png";
import globo from "../../assets/icon-globe-black.png";
import globoWhite from "../../assets/icon-globe-white.png";
import iconMenu from "../../assets/icon-menu-white.svg";
import iconMenuBlack from "../../assets/icon-menu-black.svg";
import arrowR from "../../assets/icon-right.png";

import "./header.styles.scss"

const Header = () => {

  const [fixNewHeader, setState] = useState(false);
  const [showCategoriesSidebar, setShowCategoriesSidebar] = useState(false);
  const { pathname } = useLocation();
  
  function toggleCategoriesSidebar() {
    setShowCategoriesSidebar(!showCategoriesSidebar);
  }

  function fixOtherHeader(){
    if(pathname === "/"){
      if(window.scrollY > 900){
        setState(true);
      }
      else{
        setState(false);
      }
    }
    else{
      if(window.scrollY > 250){
        setState(true);
        
      }
      else{
        setState(false);
      }
    }
  }

  window.addEventListener("scroll", fixOtherHeader);

  return (
    <>
      <Row className={fixNewHeader ? "header-web fixed" : "header-web"} id="header-inDesktop">
        <Col md="2" id="header-options">
          <a href="/">
            <img
              id="header-img"
              src={logo}
              width="200px"
              height="100px"
              alt="logo"
            />
          </a>
        </Col>

        <Col md="8" id="header-options-2">
            <Col sm='12' md='11' lg='11' xl='11'>
              <Row className="row-main-options">
                <a href="/" className={fixNewHeader ? "link-navbar fixed" : "link-navbar"}>
                  Início
                </a>

                <a href="/sobre-nos" className={fixNewHeader ? "link-navbar fixed" : "link-navbar"}>
                  Sobre nós
                </a>

                <a href="/galeria" className={fixNewHeader ? "link-navbar fixed" : "link-navbar"}>
                  Galeria
                </a>

                <a href="/contactos" className={fixNewHeader ? "link-navbar fixed" : "link-navbar"}>
                  Contactos
                </a>

                <a href="/lazer-experiencias" className={fixNewHeader ? "link-navbar fixed" : "link-navbar"}>
                  Lazer & Experiências
                </a>

                <img
                    id="img-header-mobile"
                    src={fixNewHeader ? iconMenuBlack : iconMenu}
                    onClick={toggleCategoriesSidebar}
                    height="30vw"
                    width="30vw"
                    alt="logo"
                />

                <button className={fixNewHeader ? "header-btn-more fixed" : "header-btn-more"} onClick={() => window.open("https://www.airbnb.pt/rooms/45136485?_set_bev_on_new_domain=1686151434_MDkxYzhiYTNlOWVj&source_impression_id=p3_1686151434_iOkB3XJAAK5Cuse2", "_blank")}>
                    Reserve já
                </button>
              </Row>
            </Col>
            <Col md="1" id="header-options">
              <a href="/">
                <img
                  id="header-img"
                  src={fixNewHeader ? globo : globoWhite}
                  width="35px"
                  height="35px"
                  alt="logo"
                />
              </a>
            </Col>
        </Col>


      </Row>

      <Row id="header-mobile">
        <Col md='4' xs='4' className='header-mobile-logo'>
          <a href="/">
            <img
              id="img-header-mobile"
              src={logo2}
              height="80px"
              width="80px"
              alt="logo"
            />
          </a>
        </Col>
        <Col md='4' xs='4' className="header-icon-burguer">
          <img
            id="img-header-mobile"
            src={iconMenuBlack}
            onClick={toggleCategoriesSidebar}
            height="30x"
            width="30px"
            alt="logo"
          />
        </Col>
      </Row>

      <Offcanvas
            className="menu-sidebar"
            show={showCategoriesSidebar}
            onHide={toggleCategoriesSidebar}
            key={"categories"}
            placement={"end"}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="sidebar-title">
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="sidebar-categories">
              <Row>
                <Col xs='11'>
                  <a href="/" id="link-sidebar">
                    Início
                  </a>
                </Col>
                <Col xs='1' className="sidebar-col-arrow">
                  <img src={arrowR} height="20x" width="20px" alt="arrow" />
                </Col>
              </Row>
              <Row>
                <Col xs='11'>
                  <a href="/sobre-nos" id="link-sidebar">
                    Sobre nós
                  </a>
                </Col>
                <Col xs='1' className="sidebar-col-arrow">
                  <img src={arrowR} height="20x" width="20px" alt="arrow" />
                </Col>
              </Row>
              <Row>
                <Col xs='11'>
                  <a href="/galeria" id="link-sidebar">
                    Galeria
                  </a>
                </Col>
                <Col xs='1' className="sidebar-col-arrow">
                  <img src={arrowR} height="20x" width="20px" alt="arrow" />
                </Col>
              </Row>
              <Row>
                <Col xs='11'>
                  <a href="/contactos" id="link-sidebar">
                    Contactos
                  </a>
                </Col>
                <Col xs='1' className="sidebar-col-arrow">
                  <img src={arrowR} height="20x" width="20px" alt="arrow" />
                </Col>
              </Row>
              <Row>
                <Col xs='11'>
                  <a href="/lazer-experiencias" id="link-sidebar">
                    Lazer & Experiências
                  </a>
                </Col>
                <Col xs='1' className="sidebar-col-arrow">
                  <img src={arrowR} height="20x" width="20px" alt="arrow" />
                </Col>
              </Row>
              <Row>
                <Col xs='11'>
                  <a href="/sustentabilidade" id="link-sidebar">
                    Sustentabilidade
                  </a>
                </Col>
                <Col xs='1' className="sidebar-col-arrow">
                  <img src={arrowR} height="20x" width="20px" alt="arrow" />
                </Col>
              </Row>
              <Row>
                <Col xs='11'>
                  <a href="/livro-informacoes" id="link-sidebar">
                    Livro de Informações
                  </a>
                </Col>
                <Col xs='1' className="sidebar-col-arrow">
                  <img src={arrowR} height="20x" width="20px" alt="arrow" />
                </Col>
              </Row>
            </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
