import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MakingOf.css";
import Navigation from "../componentsHome/Navigation";
import Footer from "../componentsHome/footer";
import Banner from "../componentsMakingOf/Banner";
import StoryText from "../componentsMakingOf/StoryText";
import StoryImage from "../componentsMakingOf/StoryImage";
import ExtraInfo from "../componentsMakingOf/ExtraInfo";

export default function MakingOf() {
	const { id } = useParams();
	const [story, setStory] = useState(null);
	const [showFullText, setShowFullText] = useState(false);

	useEffect(() => {
		if (story) {
			const views = JSON.parse(localStorage.getItem("views")) || {};
			views[story.id] = (views[story.id] || 0) + 1;
			localStorage.setItem("views", JSON.stringify(views));
		}
	}, [story]);

	useEffect(() => {
		fetch(`${import.meta.env.BASE_URL}data.json`)
			.then((res) => res.json())
			.then((data) => {
				const selected = data.find((item) => item.id === id);
				setStory(selected);
			})
			.catch((err) => console.error("Fout bij ophalen data:", err));
	}, [id]);

	if (!story) return <p className="loading">Bezig met laden…</p>;

	return (
		<>
			<Navigation />

			<div className="making-of-wrapper">
				<h1 className="banner-title">Making Of</h1>

				<Banner foto={story.foto1} title={story.title} student={story.student} />

				<div className="story-content">
					<StoryText story={story} showFullText={showFullText} toggleShowFullText={() => setShowFullText(!showFullText)} />

					{!showFullText && <StoryImage foto={story.foto2} link={story.link} id={story.id} />}
				</div>

				<ExtraInfo story={story} />
			</div>

			<Footer />
		</>
	);
}
