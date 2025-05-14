import React from "react";
import "../styles/Portal.css";
import Navigation from "../componentsHome/Navigation";
import Carousel from "../componentsHome/Carousel";
import AllStories from "../componentsHome/AllStories";
import Footer from "../componentsHome/footer";

export default function Portal() {
	return (
		<>
			<Navigation />
			<div className="wrapper"></div>

			<Footer />
		</>
	);
}
