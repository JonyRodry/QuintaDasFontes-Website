import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {sliderImage} from "./images-caroussel.js"

import "./carroussel.styles.scss";

const len = sliderImage.length - 1;

function Carrousel() {

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const goToAboutUs = () => {
    navigate('/sobre-nos');
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <section className="slide-container">

        <div className="over-opacity">
          <p>
            <h2 className="slide-text-title">Quinta das Fontes</h2>
          </p>
          <p>
            <h4 className="slide-text-subtitle">Sejam Bem-vindos!</h4>
          </p>
          <p className="slide-text-description">
            Agende uma visita e venha conhecer de perto os encantos deste 
            espaço ideal para repousar, eventos familiares ou empresariais,
            entre outro tipo de eventos.
          </p>
          <button className="slide-btn-more" onClick={goToAboutUs}>
            SABER MAIS
          </button>
        </div>

        {sliderImage.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={slide.urls} alt="" />
          </div>
        ))}
      </section>
    </>
    );
}

export default Carrousel;
