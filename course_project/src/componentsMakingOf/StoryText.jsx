// componentsMakingOf/StoryText.jsx
import React from "react";

export default function StoryText({ story, showFullText, toggleShowFullText }) {
	return (
		<div className={`story-text ${showFullText ? "full" : ""}`}>
			<h2>Verhaal</h2>
			<p dangerouslySetInnerHTML={{ __html: showFullText ? story["description"] : story.description }} />

			{showFullText && (
				<>
					<h3>Parallax effect</h3>
					<p dangerouslySetInnerHTML={{ __html: story["parallax-text"] }} />
				</>
			)}

			<h3>Auteur</h3>
			<p>{story.nameStudent}</p>
			<p>{story.genre}</p>

			<button className="lees-meer" onClick={toggleShowFullText}>
				{showFullText ? "Lees minder" : "Lees meer"}
			</button>
		</div>
	);
}
