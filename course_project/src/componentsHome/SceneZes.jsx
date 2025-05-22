import React, { useState } from "react";
import { motion } from "framer-motion";
import StoryBox from "./StoryBox";
import "../styles/SceneZes.css";

export default function SceneZes() {
	const [hovered, setHovered] = useState(false);

	return (
		<section
			className="scene-zes-wrapper"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="the-end-wrapper">
				<StoryBox>
					<motion.div
						className={`the-end-special ${hovered ? "glow" : ""}`}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: hovered ? 1.05 : 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
					>
						The End
					</motion.div>
					<span />
				</StoryBox>
			</div>
		</section>
	);
}
