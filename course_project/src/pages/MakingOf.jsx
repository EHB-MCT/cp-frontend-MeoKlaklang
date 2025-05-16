import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MakingOf.css";
import Navigation from "../componentsHome/Navigation";
import Footer from "../componentsHome/footer";

export default function MakingOf() {
	const { id } = useParams();
	const [story, setStory] = useState(null);

	useEffect(() => {
		fetch("/data.json")
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

				<div
					className="banner"
					style={{
						backgroundImage: `url(${story.foto1})`,
					}}
				>
					<div className="banner-content">
						<h1 className="banner-title">{story.title}</h1>
						<p className="banner-author">{story.student}</p>
					</div>
				</div>

				{/* NIEUW TOEGEVOEGDE CONTEXT */}
				<div className="story-content">
					<div className="story-text">
						<h2>Verhaal</h2>
						<p>{story.text}</p>

						<h3>Auteur</h3>
						<p>{story.auteur}</p>
						<p>{story.genre}</p>

						<button className="lees-meer">Lees meer</button>
					</div>

					<div className="story-image">
						<img src={story.foto2} alt="Illustratie" />
						<a href={story.website} target="_blank" rel="noopener noreferrer">
							👁️ View Website
						</a>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
