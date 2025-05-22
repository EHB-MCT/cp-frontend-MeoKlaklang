import React from "react";

export default function ExtraInfo({ story }) {
	return (
		<div className="extra-info">
			<h2 className="extra-title">EXTRA INFORMATIE</h2>
			<div className="extra-images">
				{story.imgsExtra &&
					story.imgsExtra.map((img, index) => (
						<img key={index} src={img} alt={`Illustratie ${index + 1}`} />
					))}
			</div>
			<p className="extra-description">{story.description}</p>
		</div>
	);
}
