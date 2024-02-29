import "./carroussel.styles.scss";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen, legenda }) {
  
  const [show, setShown] = useState(false);

  const zoomAnimation = useSpring({
    opacity: 1,
    transform: show ? "scale(1.05)" : "scale(1)"
  });

  return (
    <animated.div
      className="cardEvent"
      style={zoomAnimation}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="imgEventos" />
      <p>
        {legenda}
      </p>
    </animated.div>
  );
}

export default Card;
