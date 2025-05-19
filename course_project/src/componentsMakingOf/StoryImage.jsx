// componentsMakingOf/StoryImage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { LiaEyeSolid } from "react-icons/lia";

export default function StoryImage({ foto, link, id }) {
	const navigate = useNavigate();

	return (
		<div className="story-image">
			<img src={foto} alt="Illustratie" />
			<button className="view-website-button" onClick={() => navigate(link, { state: { id } })}>
				<LiaEyeSolid size={24} />
				View Story
			</button>
		</div>
	);
}
