import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import bird1 from "../assets/vogel.png";
import bird2 from "../assets/vogel.png";
import bird3 from "../assets/vogel.png";
import boom from "../assets/boom.png";
import fairy from "../assets/fairy.png";
import blauweVogel from "../assets/BlauweVogel.png";
import StoryBox from "./StoryBox";
import "../styles/SceneVier.css";

export default function SceneVier() {
	const [vogelGevallen, setVogelGevallen] = useState(false);

	const [scrollDirection, setScrollDirection] = useState(0); // -1 = omhoog, 1 = omlaag
	const lastScrollY = useRef(window.scrollY);
	const offset = useSpring(0, { stiffness: 200, damping: 20 });

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const delta = currentScrollY - lastScrollY.current;
			const direction = delta > 0 ? 1 : delta < 0 ? -1 : 0;

			offset.set(direction * -80);
			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [offset]);

	return (
		<section className="scene-vier-wrapper">
			<img src={boom} alt="boom" className="boom" />

			{/* Vogels volgen scrollrichting lichtjes */}
			<motion.img src={bird1} alt="vogel 1" className="bird bird-1" style={{ y: offset }} />
			<motion.img src={bird2} alt="vogel 2" className="bird bird-2" style={{ y: offset }} />
			<motion.img src={bird3} alt="vogel 3" className="bird bird-3" style={{ y: offset }} />

			<img src={fairy} alt="fee" className="fairy-scenevier" />

			<motion.img src={blauweVogel} alt="blauwe vogel" className="blauwe-vogel" onClick={() => setVogelGevallen(true)} animate={{ y: vogelGevallen ? 460 : 0 }} transition={{ type: "spring", stiffness: 120 }} />

			<div className="liefde-wrapper">
				<StoryBox>
					<p className="story-text-4">De zwaluw wordt smoorverliefd op Duimelijntje en vraagt of ze mee wilt gaan naar het zuiden met hem.</p>
				</StoryBox>
			</div>
		</section>
	);
}
