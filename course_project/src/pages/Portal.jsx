import React from "react";
import "../styles/Portal.css";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import AllStories from "../components/AllStories";
import Footer from "../components/footer";

export default function Portal() {
	return (
		<>
			<Navigation />
			<div className="wrapper">
				<div className="portal">
					<h1 className="portal-title">HOT TODAY</h1>
					<Carousel dataUrl="/data.json" visibleCount={2} />
					<h1 className="portal-title2">ALL STORYS</h1>
					<AllStories dataUrl="/data.json" />
				</div>
			</div>

			<Footer />
		</>
	);
}
