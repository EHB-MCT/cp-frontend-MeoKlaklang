import React, { useEffect, useState, useContext } from "react";
import MiniSprookjeCard from "./MiniSprookjeCard";
import { SearchContext } from "./SearchContext";
import "../styles/AllStories.css";

export default function AllStories({ dataUrl }) {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const { searchTerm, selectedGenre } = useContext(SearchContext);

	useEffect(() => {
		fetch(dataUrl)
			.then((res) => res.json())
			.then((json) => setItems(json))
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, [dataUrl]);

	if (loading) return <p>Bezig met laden…</p>;

	const filteredItems = items.filter((story) => {
		const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesGenre = selectedGenre ? story.genre.toLowerCase() === selectedGenre.toLowerCase() : true;
		return matchesSearch && matchesGenre;
	});

	return (
		<div className="all-stories">
			<div className="all-stories-grid">
				{filteredItems.map((story, index) => (
					<MiniSprookjeCard key={index} id={story.id} title={story.title} author={story.student} genre={story.genre} image={story.image} />
				))}
			</div>
		</div>
	);
}
