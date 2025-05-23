// src/componentsHome/Hero.jsx
import React from "react";
import { useBlink } from "../hooks/useBlink";
import { useMouseOffset } from "../hooks/useMouseOffset";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import flower from "../assets/flower.png";
import effects from "../assets/effects.png";
import grass from "../assets/grass.png";
import fairyOpen from "../assets/fairy.png";
import fairyCloseEyes from "../assets/fairyCloseEyes.png";

import "../styles/Hero.css";

import StoryBox from "./StoryBox";
import { useNavigate, useLocation } from "react-router-dom";

export default function Hero() {
	const blink = useBlink(3000, 200);
	const offset = useMouseOffset(30);
	const { scrollY } = useViewportScroll();
	const titleY = useTransform(scrollY, [0, 400], [0, -80]);
	const titleOpacity = useTransform(scrollY, [0, 400], [1, 0]);
	const storyY = useTransform(scrollY, [2000, 2500], [50, 0]);
	const storyOpacity = useTransform(scrollY, [1200, 1300], [0, 1]);

	const navigate = useNavigate();
	const location = useLocation();
	const id = location.state?.id ?? "1";

	return (
		<div className="hero-wrapper">
			<button className="circle-back-button" onClick={() => navigate("/")}>
				←
			</button>

			<section className="hero">
				<motion.h1 style={{ y: titleY, opacity: titleOpacity }} className="title">
					Duimelijntje
				</motion.h1>
				<img
					src={effects}
					alt="flower effects"
					className="flower-effects"
					style={{
						transform: `translateX(calc(-50% + ${offset.x}px)) translateY(${offset.y}px)`,
					}}
				/>
			</section>

			<section className="reveal">
				<img src={grass} alt="gras" className="grass" />
				<img src={blink ? fairyCloseEyes : fairyOpen} alt="fee knippert met ogen" className="fairy" />
			</section>

			<img src={flower} alt="bloem" className="flower" />

			<motion.div style={{ y: storyY, opacity: storyOpacity }} className="hero-story-wrapper">
				<StoryBox>
					<p className="story-text-secene1">Er was eens een klein meisje genaamd Duimelijntje. Ze werd in de gaten gehouden door de padkoning omdat hij een prinses zocht voor zijn zoon.</p>
					<span />
				</StoryBox>
			</motion.div>
		</div>
	);
}
