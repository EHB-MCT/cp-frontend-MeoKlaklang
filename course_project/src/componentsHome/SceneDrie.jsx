import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import frog2 from "../assets/frog2.png";
import fairy from "../assets/fairy.png";
import lelie3 from "../assets/lelie3.png";
import vlinder from "../assets/vlinder.png";
import vlinder1 from "../assets/vlinder2.png";
import vis from "../assets/vis.png";
import vis1 from "../assets/vis2.png";
import boing from "../assets/boing.mp3";
import dust from "../assets/dust.png"; // voeg je stofwolk-afbeelding toe

import "../styles/SceneDrie.css";

export default function SceneDrie() {
	const [hovered, setHovered] = useState(false);
	const [frogClicked, setFrogClicked] = useState(false);
	const [frogShouldFly, setFrogShouldFly] = useState(false);
	const [showDust, setShowDust] = useState(false);

	const boingRef = useRef(new Audio(boing));

	const handleFrogClick = () => {
		setFrogClicked(true);
		boingRef.current.currentTime = 0;
		boingRef.current.play().catch((err) => {
			console.error("Geluid kon niet worden afgespeeld:", err);
		});
	};

	return (
		<section className="scene-drie-wrapper">
			<img src={lelie3} alt="gele lelie" className="lelie3" />

			{/* Frog die wegvliegt */}
			<motion.img
				src={frog2}
				alt="kikker met hoed"
				className="frog2"
				onClick={handleFrogClick}
				animate={
					frogShouldFly
						? { x: 300, y: -300, opacity: 0, rotate: 360 }
						: { x: 0, y: 0, opacity: 1, rotate: 0 }
				}
				transition={{ duration: 1, ease: "easeInOut" }}
			/>

			{/* Fairy met hover-vlinders */}
			<img
				src={fairy}
				alt="vleugelmeisje"
				className="fairy-scene-drie"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			/>

			{hovered && (
				<>
					<motion.img
						src={vlinder}
						alt="vlinder"
						className="vlinder"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: [-20, 0, -20] }}
						transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
					/>
					<motion.img
						src={vlinder1}
						alt="vlinder1"
						className="vlinder1"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: [20, -10, 20] }}
						transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
					/>
					{/* extra vlinders rondom */}
					<motion.img
						src={vlinder}
						alt="vlinder-rechts-1"
						className="vlinder"
						style={{ top: "42%", left: "72%" }}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: [-10, 0, -10] }}
						transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
					/>
					<motion.img
						src={vlinder1}
						alt="vlinder-rechts-2"
						className="vlinder"
						style={{ top: "50%", left: "70%" }}
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: [10, 0, 10] }}
						transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
					/>
					<motion.img
						src={vlinder}
						alt="vlinder-rechts-3"
						className="vlinder"
						style={{ top: "38%", left: "74%" }}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: [10, 0, 10] }}
						transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
					/>
				</>
			)}

			{/* Vissen na klik op frog */}
			{frogClicked && (
				<>
					<motion.img
						src={vis}
						alt="vis"
						className="vis"
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					/>

					<motion.img
						src={vis1}
						alt="vis1"
						className="vis1"
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
						onAnimationComplete={() => {
							setFrogShouldFly(true);
							setShowDust(true);
						}}
					/>
				</>
			)}

			{/* Stofwolk na vertrek kikker */}
			{showDust && (
				<motion.img
					src={dust}
					alt="stofwolk"
					className="dust"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4, ease: "easeOut" }}
				/>
			)}
		</section>
	);
}
