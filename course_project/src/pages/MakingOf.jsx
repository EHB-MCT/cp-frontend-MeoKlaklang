import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MakingOf.css";
import Navigation from "../componentsHome/Navigation";
import Footer from "../componentsHome/footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LiaEyeSolid } from "react-icons/lia";

export default function MakingOf() {
	const { id } = useParams();
	const [story, setStory] = useState(null);
	const [showFullText, setShowFullText] = useState(false);
	const navigate = useNavigate();

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

				<div className="story-content">
					<div className={`story-text ${showFullText ? "full" : ""}`}>
						<h2>Verhaal</h2>
						<p
							dangerouslySetInnerHTML={{
								__html: showFullText ? story["full-text"] : story.text,
							}}
						/>

						{showFullText && (
							<>
								<h3>Parallax effect</h3>
								<p
									dangerouslySetInnerHTML={{
										__html: story["parallax-text"],
									}}
								/>
							</>
						)}

						<h3>Auteur</h3>
						<p>{story.auteur}</p>
						<p>{story.genre}</p>

						<button className="lees-meer" onClick={() => setShowFullText(!showFullText)}>
							{showFullText ? "Lees minder" : "Lees meer"}
						</button>
					</div>

					{!showFullText && (
						<div className="story-image">
							<img src={story.foto2} alt="Illustratie" />
							<button className="view-website-button" onClick={() => navigate(story.link, { state: { id: story.id } })}>
								<LiaEyeSolid size={24} />
								View Story
							</button>
						</div>
					)}
				</div>
				<div className="extra-info">
					<h2 className="extra-title">EXTRA INFORMATIE</h2>

					<div className="extra-images">
						<img src={story.foto3} alt="Illustratie 1" />
						<img src={story.foto4} alt="Illustratie 2" />
						<img src={story.foto5} alt="Illustratie 3" />
					</div>

					<p className="extra-description">{story["extra-text"]}</p>
				</div>
			</div>

			<Footer />
		</>
	);
}
