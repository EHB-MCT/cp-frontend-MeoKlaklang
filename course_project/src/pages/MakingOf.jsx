import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/MakingOf.css";

import Navigation from "../componentsHome/Navigation";
import Footer from "../componentsHome/footer";
import Banner from "../componentsMakingOf/Banner";
import StoryText from "../componentsMakingOf/StoryText";
import StoryImage from "../componentsMakingOf/StoryImage";
import ExtraInfo from "../componentsMakingOf/ExtraInfo";

import { useFetchFairytales } from "../hooks/useFetchFairytales";

export default function MakingOf() {
	const { id } = useParams();
	const { fairytales, isLoading } = useFetchFairytales();
	const [story, setStory] = useState(null);
	const [showFullText, setShowFullText] = useState(false);

	useEffect(() => {
		if (fairytales.length > 0) {
			const selected = fairytales.find((item) => item.id === id);
			setStory(selected);

			if (selected) {
				const views = JSON.parse(localStorage.getItem("views")) || {};
				views[selected.id] = (views[selected.id] || 0) + 1;
				localStorage.setItem("views", JSON.stringify(views));
			}
		}
	}, [fairytales, id]);

	if (isLoading || !story) return <p className="loading">Bezig met laden…</p>;

	return (
		<>
			<Navigation />

			<div className="making-of-wrapper">
				<h1 className="banner-title-h1">Making Of</h1>

				<Banner foto={story.imgBanner} title={story.fairytale} student={story.nameStudent} />

				<div className="story-content">
					<StoryText story={story} showFullText={showFullText} toggleShowFullText={() => setShowFullText(!showFullText)} />

					{!showFullText && <StoryImage image={story.imgThumbnail} fairytaleLink={story.fairytaleLink} id={story.id} />}
				</div>

				<ExtraInfo story={story} />
			</div>

			<Footer />
		</>
	);
}
