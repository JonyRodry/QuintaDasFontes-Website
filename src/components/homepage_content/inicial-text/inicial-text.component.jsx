import React from "react";
import { Row } from "react-bootstrap";

import "./inicial-text.styles.css"
import {cssAnimations} from '../../../scripts.js';

function InicialText() {

    window.addEventListener("scroll", cssAnimations);

    return (
        <>
            <Row className="hiddenBottomTop" id="inicial-text">
                <p>
                Em S. Pedro do Sul podemos encontrar a Quinta das Fontes, 
                um alojamento inserido numa deslumbrante área que conjuga uma 
                casa rústica e vários espaços exteriores numa área de 130.000m2. 
                Com todas as comodidades para albergar uma família ou grupos, em 
                regime de exclusividade e segurança absoluta. 
                </p>
                <p>
                A casa de arquitetura típica portuguesa onde predomina a pedra e 
                a madeira maciça, foi totalmente restaurada, assim como os 
                diversos espaços onde predominam as fontes que dão nome à quinta.  
                </p>
                <p>
                Dá realce também a capela, o espigueiro, a vinha, o olival,
                o laranjal, o lago, a piscina e o bosque que completam um quadro 
                bucólico que proporcionará seguramente muitos momentos de lazer.
                </p>
                <p>
                Com garantia de serenidade e aconchego, faça da Quinta das Fontes 
                uma opção de excelência para passar uns dias na zona de Lafões e 
                assim usufruir das extraordinárias paisagens das serras circundantes 
                e das famosas termas de S. Pedro do Sul 
                </p>
            </Row>
            <Row className="hiddenBottomTop" id="inicial-text-btn-row">
                <a href="/sobre-nos" className="inicial-text-href">
                    <button className="inicial-text-btn-more">
                        SABER MAIS
                    </button>
                </a>
            </Row>
        </>
    );
}

export default InicialText;
