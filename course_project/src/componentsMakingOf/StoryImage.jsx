import React from "react";
import { LiaEyeSolid } from "react-icons/lia";

export default function StoryImage({ image, fairytaleLink }) {
	const handleClick = () => {
		console.log("Redirecting to:", fairytaleLink);
		if (fairytaleLink && fairytaleLink.startsWith("http")) {
			window.location.href = fairytaleLink;
		} else {
			alert("Ongeldige of ontbrekende fairytale-link.");
		}
	};

	return (
		<div className="story-image">
			<img src={image} alt="Illustratie" />
			<button className="view-website-button" onClick={handleClick}>
				<LiaEyeSolid size={24} />
				View Story
			</button>
		</div>
	);
}
