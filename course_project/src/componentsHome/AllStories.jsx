import React, { useContext } from "react";
import MiniSprookjeCard from "./MiniSprookjeCard";
import { SearchContext } from "./SearchContext";
import { useFetchFairytales } from "../hooks/useFetchFairytales";
import "../styles/AllStories.css";

export default function AllStories() {
	const { fairytales, isLoading } = useFetchFairytales();
	const { searchTerm, selectedGenre } = useContext(SearchContext);

	if (isLoading) return <p>Bezig met laden…</p>;

	const filteredItems = fairytales.filter((story) => {
		const matchesSearch = story.fairytale?.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesGenre = selectedGenre ? story.genre?.toLowerCase() === selectedGenre.toLowerCase() : true;
		return matchesSearch && matchesGenre;
	});

	return (
		<div className="all-stories">
			<div className="all-stories-grid">
				{filteredItems.map((story) => (
					<MiniSprookjeCard
						key={story.id}
						id={story.id}
						fairytale={story.fairytale}
						nameStudent={story.nameStudent}
						genre={story.genre}
						imgThumbnail={story.imgThumbnail}
					/>
				))}
			</div>
		</div>
	);
}
