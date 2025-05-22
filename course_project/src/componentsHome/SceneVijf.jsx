// SceneVijf.jsx met Parallax van @react-spring/parallax
import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

import blauweVogel from "../assets/BlauweVogel.png";
import grasMadelijntje from "../assets/gras_madelijntje.png";
import vlinder2 from "../assets/vlinder2.png";
import fairySound from "../assets/fairy_sound.mp3";
import stip from "../assets/stip.png";
import bigStar from "../assets/big-star.png";
import star2 from "../assets/star-2.png";
import star3 from "../assets/star-3.png";

import "../styles/SceneVijf.css";

export default function SceneVijf() {
  const audioRef = useRef(null);
  const [startFladderen, setStartFladderen] = useState(false);

  const handleHover = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((err) => {
        console.error("Geluid kon niet worden afgespeeld:", err);
      });
    }
    setStartFladderen(true);
  };

  const fladderAnimatie = {
    initial: { opacity: 1, y: 0 },
    animate: startFladderen ? { y: -1000, opacity: 0 } : { y: 0, opacity: 1 },
    transition: { duration: 4, ease: "easeInOut" },
  };

  const genPulse = () => ({
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: Math.random() * 2 + 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random(),
      },
    },
  });

  const sterren = [
    stip, stip, bigStar, star2, star3, stip, stip, bigStar, star2, star3,
    stip, stip, bigStar, star2, star3, stip, stip, bigStar, star2, star3,
  ];

  return (
    <div className="parallax-wrapper" onMouseEnter={handleHover}>
      <audio ref={audioRef} src={fairySound} preload="auto" />
      <Parallax pages={2}>
        <ParallaxLayer sticky={{ start: 0, end: 1 }}>
          <div className="sticky-content">
            <img src={blauweVogel} alt="blauwe vogel" className="blauwe-vogel-vijf" />
            <img src={grasMadelijntje} alt="gras met madelijntje" className="gras-madelijntje-vijf" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={1}>
          <>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.img
                key={i}
                src={vlinder2}
                alt={`vlinder ${i}`}
                className={`vlinder-vijf vlinder-${i}`}
                {...fladderAnimatie}
              />
            ))}
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.5}>
          <>
            {sterren.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`ster ${index + 1}`}
                className={`ster ster-${index + 1}`}
                {...genPulse()}
              />
            ))}
          </>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
