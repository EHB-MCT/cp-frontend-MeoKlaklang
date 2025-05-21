import React from "react";
import "../styles/Portal.css";
import Navigation from "../componentsHome/Navigation";
import PopularCarousel from "../componentsHome/PopularCarousel";
import AllStories from "../componentsHome/AllStories";
import Footer from "../componentsHome/footer";

export default function Portal() {
	const dataUrl = `${import.meta.env.BASE_URL}data.json`;

	return (
		<>
			<Navigation />
			<div className="wrapper">
				<div className="portal">
					<h1 className="portal-title">HOT TODAY</h1>
					<PopularCarousel dataUrl={dataUrl} />
					<h1 className="portal-title2">ALL STORYS</h1>
					<AllStories dataUrl={dataUrl} />
				</div>
			</div>
			<Footer />
		</>
	);
}
