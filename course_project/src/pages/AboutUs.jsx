// src/pages/AboutUs.jsx
import React from "react";
import AboutText from "../componentsAboutUs/AboutText";
import PhotoTiles from "../componentsAboutUs/PhotoTiles";
import "../styles/AboutUs.css";
import Navigation from "../componentsHome/Navigation";
import Footer from "../componentsHome/footer";
import PopularCarousel from "../componentsHome/PopularCarousel";

export default function AboutUs() {
	return (
		<>
			<Navigation />
			<div className="wrapper-aboutUs">
				<div className="about-wrapper">
					<AboutText />
					<PhotoTiles />
				</div>
				<PopularCarousel dataUrl={`${import.meta.env.BASE_URL}data.json`} />
			</div>
			<Footer />
		</>
	);
}
