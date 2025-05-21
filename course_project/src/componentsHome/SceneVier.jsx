// src/componentsHome/SceneVier.jsx
import React, { useState } from "react";

import { motion } from "framer-motion";
import { useMouseOffset } from "../hooks/useMouseOffset";

import bird1 from "../assets/vogel.png";
import bird2 from "../assets/vogel.png";
import bird3 from "../assets/vogel.png";
import boom from "../assets/boom.png";
import fairy from "../assets/fairy.png";
import blauweVogel from "../assets/BlauweVogel.png";
import StoryBox from "./StoryBox";
import "../styles/SceneVier.css";

export default function SceneVier() {
	const offset = useMouseOffset(20); // hogere waarde = sterkere reactie
	const [vogelGevallen, setVogelGevallen] = useState(false);

	return (
		<section className="scene-vier-wrapper">
			<img src={boom} alt="boom" className="boom" />

			<motion.img src={bird1} alt="vogel 1" className="bird bird-1" animate={{ x: offset.x, y: offset.y }} transition={{ type: "spring", stiffness: 50 }} />

			<motion.img src={bird2} alt="vogel 2" className="bird bird-2" animate={{ x: offset.x * 1.2, y: offset.y * 1.2 }} transition={{ type: "spring", stiffness: 40 }} />

			<motion.img src={bird3} alt="vogel 3" className="bird bird-3" animate={{ x: offset.x * 1.4, y: offset.y * 1.4 }} transition={{ type: "spring", stiffness: 30 }} />

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
