// src/components/FrogLilySection.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import lily1 from "../assets/lelie1.png";
import lily2 from "../assets/lelie2.png";
import frog from "../assets/frog.png";
import frogSound from "../assets/frog-sound.mp3";
import "../styles/FrogLilySection.css";

export default function FrogLilySection() {
  const constraintsRef = useRef(null);
  const audioRef = useRef(new Audio(frogSound));
  const [played, setPlayed] = useState(false);

  return (
    <section className="frog-lily-wrapper" ref={constraintsRef}>
      <motion.img
        src={lily2}
        alt="lelieblad achter"
        className="lily back"
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0.1}
      />

      <img src={frog} alt="kikker" className="frog" />

      <motion.img
        src={lily1}
        alt="lelieblad voor"
        className="lily front"
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0.1}

        onDragEnd={(_, info) => {
          const distance = Math.abs(info.offset.x);
          if (distance > 100 && !played) {
            audioRef.current.play();
            setPlayed(true);
          }
        }}
      />
    </section>
  );
}
