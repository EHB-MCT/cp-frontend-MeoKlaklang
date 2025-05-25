import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import bird1 from "../assets/vogel.png";
import bird2 from "../assets/vogel.png";
import bird3 from "../assets/vogel.png";
import boom from "../assets/boom.png";
import fairy from "../assets/fairy.png";
import blauweVogel from "../assets/BlauweVogel.png";
import boom2 from "../assets/boom-2.png";
import { useMouseOffset } from "../hooks/useMouseOffset";
import StoryBox from "./StoryBox";
import "../styles/SceneVier.css";

export default function SceneVier() {
	const [vogelGevallen, setVogelGevallen] = useState(false);

	const lastScrollY = useRef(window.scrollY);

	const scrollOffset = useSpring(0, { stiffness: 400, damping: 10 });

	const offset = useMouseOffset(50);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const delta = currentScrollY - lastScrollY.current;
			const direction = delta > 0 ? 1 : delta < 0 ? -1 : 0;

			scrollOffset.set(direction * -80);
			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollOffset]);

	return (
		<section className="scene-vier-wrapper">
			<span className="vogel-hint">klik op de blauwe vogel!</span>

			<img
				src={boom2}
				alt="effect boom"
				className="boom-effects"
				style={{
					transform: `translateX(calc(-50% + ${offset.x}px)) translateY(${offset.y}px)`,
				}}
			/>

			<img src={boom} alt="boom" className="boom" />

			<motion.img src={bird1} alt="vogel 1" className="bird bird-1" style={{ y: scrollOffset }} />
			<motion.img src={bird2} alt="vogel 2" className="bird bird-2" style={{ y: scrollOffset }} />
			<motion.img src={bird3} alt="vogel 3" className="bird bird-3" style={{ y: scrollOffset }} />

			<img src={fairy} alt="fee" className="fairy-scenevier" />

			<motion.img src={blauweVogel} alt="blauwe vogel" className="blauwe-vogel" onClick={() => setVogelGevallen(true)} animate={{ y: vogelGevallen ? 430 : 0 }} transition={{ type: "spring", stiffness: 100 }} />

			<div className="liefde-wrapper">
				<StoryBox>
					<p className="story-text-4">De zwaluw wordt smoorverliefd op Duimelijntje en vraagt of ze mee wilt gaan naar het zuiden met hem.</p>
				</StoryBox>
			</div>
		</section>
	);
}
