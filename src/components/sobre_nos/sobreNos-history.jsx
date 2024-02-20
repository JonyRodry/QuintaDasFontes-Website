import React from "react";
import { Row } from "react-bootstrap";

import banner from "../../assets/slideHome_1.jpg";
import ph1 from "../../assets/quinta_das_fontes-01.jpg";
import ph2 from "../../assets/grid3.jpg";
import ph3 from "../../assets/slideHome_6.jpg";
import ph4 from "../../assets/quinta_das_fontes-124.jpg";
import ph5 from "../../assets/quinta_das_fontes-228.jpg";
import ph6 from "../../assets/slideHome_2.jpg";
import ph7 from "../../assets/qf_view.png";
import ph8 from "../../assets/quinta_das_fontes-129.jpg";
import ph9 from "../../assets/quinta_das_fontes-229.jpg";
import ph10 from "../../assets/quinta_das_fontes-230.jpg";
import ph11 from "../../assets/quinta_das_fontes-231.jpg";
import ph12 from "../../assets/quinta_das_fontes-215.jpg";

import "./sobre-nos.styles.css";

function SobreNosHistory() {

  return (
    <>
        <section className="banner-container">
            <div className="over-opacity">
            <p>
                <h2 className="banner-text-title">Sobre Nós</h2>
            </p>
            </div>
            <div className="banner-div">
            <img src={banner} id="banner-img" alt="banner"/>
            </div>
        </section>

        <Row className="history-text-title">
            <text className="history-title">
                Bem-vindos à Quinta das Fontes, uma história desde 1904...
            </text>
            <text className="history-subtitle">
                Nesta história nos entramos cem anos depois, um capitulo 
                que começa em 2004, quando adquirimos esta quinta, 
                um espaço em ruinas, cercado de floresta abandonada 
                mas que nos transmitia muito potencial.  Era tanta a 
                curiosidade e admiração a cada descoberta, que tudo foi 
                feito pelas nossas mãos, onde o  trabalho era amor e entrega 
                por este lugar, que tinha como principal objetivo, ser um 
                retiro para a família e amigos.  
            </text>   
        </Row>

        <div className="div-grid">
          <div className="item-all-height">
            <img
                id="photos-col-img"
                src={ph1}
                alt='photos-col'
            />
          </div>
          <div className="item-half-height">
            <img
                id="photos-col-img"
                src={ph2}
                alt='photos-col'
            />
          </div>
          <div className="item-half-height">
            <img
                id="photos-col-img"
                src={ph3}
                alt='photos-col'
            />
          </div>
        </div>

        <Row className="history-text-title">
            <text className="history-title">
                Reconstruímos a casa e preparamos o espaço exterior
            </text>
            <text className="history-subtitle">
              Aproveitamos a abundância de agua, para fazer a delicia de quem 
              nos visita, com um lago de peixes, duas piscinas distintas em 
              que uma é natural e alimentada com a agua pura e cristalina de 
              uma mina. Construímos tambem as 6 fontes que deram origem ao 
              nome da quinta, todas reaproveitando as mátrias primas 
              existentes na mesma. 
            </text>   
        </Row>

        <div className="div-grid">
          <div className="item-half-height">
            <img
                id="photos-col-img"
                src={ph4}
                alt='photos-col'
            />
          </div>
          <div className="item-half-height">
            <img
                id="photos-col-img"
                src={ph5}
                alt='photos-col'
            />
          </div>
          <div className="item-all-height on-right">
            <img
                id="photos-col-img"
                src={ph6}
                alt='photos-col'
            />
          </div>
        </div>

        <div className="div-grid" id="grid-text-imgs">        
          <div className="item-all-height with-text">
            <text className="history-title">
              Há muitos outros recantos dentro dos 13 hectares
            </text>
            <text className="history-subtitle withPhotos">
              <br/> Com vista para as maravilhosas serras da Arada, são Macário 
              e Montemuro, onde se pode fazer caminhadas por entre grandes 
              arvores como, pinheiros, carvalhos, sobreiros, medronheiros, 
              castanheiros, cerejeiras, nogueiras e muitas outras, sem nunca 
              perder o norte, mas esteja onde estiver 
              os únicos sons que vai ouvir, é o chilrear dos passarinhos, o 
              coaxar das rãs e a melodia da água.
            </text> 
          </div>
          <div className="item-third-height">
            <img
                id="photos-col-img"
                src={ph7}
                alt='photos-col'
            />
          </div>
          <div className="item-third-height">
            <img
                id="photos-col-img"
                src={ph8}
                alt='photos-col'
            />
          </div>
          <div className="item-third-height">
            <img
                id="photos-col-img"
                src={ph12}
                alt='photos-col'
            />
          </div>
        </div>

        <Row className="history-text-title">
            <text className="history-title">
                Disponível para Eventos
            </text>
            <text className="history-subtitle">
              A quinta das fontes está tambem disponível para eventos, desde, 
              casamentos, batizados, festas de aniversario, parceiros 
              culturais, realização de exposições, workshops, pequenos 
              concertos musicais… tendo como pano de fundo um cenário 
              natural, que nunca desilude. Só precisa de se deixar levar por 
              todo o encanto deste espaço e estará no lugar ideal. 
              Deixe o relógio parar, a mente descansar e desfrute das emoções.   
            </text>   
        </Row>

        <div className="div-grid">
          <div className="item-all-height">
            <img
                id="photos-col-img"
                src={ph9}
                alt='photos-col'
            />
          </div>
          <div className="item-half-height">
            <img
                id="photos-col-img"
                src={ph10}
                alt='photos-col'
            />
          </div>
          <div className="item-half-height">
            <img
                id="photos-col-img"
                src={ph11}
                alt='photos-col'
            />
          </div>
        </div>
    </>
    );
}

export default SobreNosHistory;
