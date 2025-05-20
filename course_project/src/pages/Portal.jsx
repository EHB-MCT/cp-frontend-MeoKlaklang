import React from "react";
import "../styles/Portal.css";
import Navigation from "../componentsHome/Navigation";
import PopularCarousel from "../componentsHome/PopularCarousel";
import AllStories from "../componentsHome/AllStories";
import Footer from "../componentsHome/footer";

export default function Portal() {
	return (
		<>
			<Navigation />
			<div className="wrapper">
				<div className="portal">
					<h1 className="portal-title">HOT TODAY</h1>
					<PopularCarousel dataUrl="/data.json" />
					<h1 className="portal-title2">ALL STORYS</h1>
					<AllStories dataUrl="/data.json" />
				</div>
			</div>

			<Footer />
		</>
	);
}
