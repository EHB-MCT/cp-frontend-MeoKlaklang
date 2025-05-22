// src/componentsHome/SceneVijf.jsx
import React, { useRef, useState } from "react";
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
		{ src: stip, className: "ster ster-1" },
		{ src: stip, className: "ster ster-2" },
		{ src: bigStar, className: "ster ster-3" },
		{ src: star2, className: "ster ster-4" },
		{ src: star3, className: "ster ster-5" },
		{ src: stip, className: "ster ster-6" },
		{ src: stip, className: "ster ster-7" },
		{ src: bigStar, className: "ster ster-8" },
		{ src: star2, className: "ster ster-9" },
		{ src: star3, className: "ster ster-10" },
		{ src: stip, className: "ster ster-11" },
		{ src: stip, className: "ster ster-12" },
		{ src: bigStar, className: "ster ster-13" },
		{ src: star2, className: "ster ster-14" },
		{ src: star3, className: "ster ster-15" },
		{ src: stip, className: "ster ster-16" },
		{ src: stip, className: "ster ster-17" },
		{ src: bigStar, className: "ster ster-18" },
		{ src: star2, className: "ster ster-19" },
		{ src: star3, className: "ster ster-20" },
	];

	return (
		<section className="scene-vijf-wrapper" onMouseEnter={handleHover}>
			<audio ref={audioRef} src={fairySound} preload="auto" />
			<img src={blauweVogel} alt="blauwe vogel" className="blauwe-vogel-vijf" />
			<img src={grasMadelijntje} alt="gras met madelijntje" className="gras-madelijntje-vijf" />

			{/* Vlinders met handmatige posities en framer-motion animatie */}
			<motion.img src={vlinder2} alt="vlinder" className="vlinder-vijf vlinder-1" {...fladderAnimatie} />
			<motion.img src={vlinder2} alt="vlinder" className="vlinder-vijf vlinder-2" {...fladderAnimatie} />
			<motion.img src={vlinder2} alt="vlinder" className="vlinder-vijf vlinder-3" {...fladderAnimatie} />
			<motion.img src={vlinder2} alt="vlinder" className="vlinder-vijf vlinder-4" {...fladderAnimatie} />
			<motion.img src={vlinder2} alt="vlinder" className="vlinder-vijf vlinder-5" {...fladderAnimatie} />
			<motion.img src={vlinder2} alt="vlinder" className="vlinder-vijf vlinder-6" {...fladderAnimatie} />

			{/* Sterren met willekeurige pulsatie */}
			{sterren.map((ster, index) => (
				<motion.img key={index} src={ster.src} alt={`ster ${index + 1}`} className={ster.className} {...genPulse()} />
			))}
		</section>
	);
}
