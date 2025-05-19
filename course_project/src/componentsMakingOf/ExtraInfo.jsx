// componentsMakingOf/ExtraInfo.jsx
import React from "react";

export default function ExtraInfo({ story }) {
	return (
		<div className="extra-info">
			<h2 className="extra-title">EXTRA INFORMATIE</h2>
			<div className="extra-images">
				<img src={story.foto3} alt="Illustratie 1" />
				<img src={story.foto4} alt="Illustratie 2" />
				<img src={story.foto5} alt="Illustratie 3" />
			</div>
			<p className="extra-description">{story["extra-text"]}</p>
		</div>
	);
}
