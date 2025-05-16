import React, { useEffect, useState } from "react";
import MiniSprookjeCard from "./MiniSprookjeCard"; // gebruik de mini versie
import "../styles/AllStories.css";

export default function AllStories({ dataUrl }) {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(dataUrl)
			.then((res) => res.json())
			.then((json) => setItems(json))
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, [dataUrl]);

	if (loading) return <p>Bezig met laden…</p>;

	return (
		<div className="all-stories">
			<div className="all-stories-grid">
				{items.map((story, index) => (
					<MiniSprookjeCard
						key={index}
						id={story.id}
						title={story.title}
						author={story.student}
						genre={story.genre}
						image={story.image}
					/>
				))}
			</div>
		</div>
	);
}
