// src/componentsHome/FrogLilySection.jsx
import React, { useRef, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import lily1 from "../assets/lelie1.png";
import lily2 from "../assets/lelie2.png";
import frog from "../assets/frog.png";
import frogSound from "../assets/frog-sound.mp3";

import "../styles/FrogLilySection.css";

import StoryBox from "./StoryBox";

export default function FrogLilySection() {
	const constraintsRef = useRef(null);
	const audioRef = useRef(new Audio(frogSound));
	const [played, setPlayed] = useState(false);

	const { scrollY } = useViewportScroll();
	const storyY = useTransform(scrollY, [1200, 1500], [50, 0]);
	const storyOpacity = useTransform(scrollY, [1200, 1500], [0, 1]);

	return (
		<div className="frog-lily-page">
			<section className="frog-lily-wrapper" ref={constraintsRef}>
				<motion.img src={lily2} alt="lelieblad achter" className="lily back" drag dragConstraints={constraintsRef} dragMomentum={false} dragElastic={0.1} />

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
							audioRef.current.play().catch(console.error);
							setPlayed(true);
						}
					}}
				/>
			</section>

			<div className="spacer" />

			<motion.div style={{ y: storyY, opacity: storyOpacity }} className="story-container">
				<StoryBox>
					<p className="story-text-scene2">De pad prins ontvoerd duimelijntje en laat haar alleen op een lelie blad. Maar gelukkig wordt ze geholpen door een vlinders en vissen! </p>
					<span />
				</StoryBox>
			</motion.div>
		</div>
	);
}
