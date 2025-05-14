// src/components/StoryLine.jsx
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/StoryLine.css";

export default function StoryLine() {
	const { scrollYProgress } = useViewportScroll();
	const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return <motion.div className="storyline" style={{ scaleY }} />;
}
