import React, { useState, useEffect } from "react";
import SprookjeCard from "./SprookjeCard";
import { useFetchFairytales } from "../hooks/useFetchFairytales";
import "../styles/Carousel.css";
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";

export default function PopularCarousel({ visibleCount = 2 }) {
	const { fairytales, isLoading } = useFetchFairytales();
	const [startIndex, setStartIndex] = useState(0);
	const [sortedItems, setSortedItems] = useState([]);

	useEffect(() => {
		if (!isLoading) {
			const views = JSON.parse(localStorage.getItem("views")) || {};

			const sorted = [...fairytales]
				.map((item) => ({
					...item,
					views: views[item.id] || 0,
				}))
				.sort((a, b) => b.views - a.views)
				.slice(0, 10); // Top 10

			setSortedItems(sorted);
		}
	}, [fairytales, isLoading]);

	const prev = () => setStartIndex((i) => Math.max(0, i - visibleCount));
	const next = () => setStartIndex((i) => Math.min(sortedItems.length - visibleCount, i + visibleCount));

	if (isLoading) return <p>Bezig met laden…</p>;

	const visibleItems = sortedItems.slice(startIndex, startIndex + visibleCount);

	return (
		<div className="carousel">
			<button
				className="arrow arrow-left"
				onClick={prev}
				disabled={startIndex === 0}
				aria-label="Vorige verhalen"
			>
				<MdOutlineArrowCircleLeft />
			</button>

			<div className="carousel-grid">
				{visibleItems.map((story) => (
					<SprookjeCard
						key={story.id}
						id={story.id}
						title={story.fairytale}
						author={story.nameStudent}
						genre={story.genre}
						image={story.imgThumbnail}
					/>
				))}
			</div>

			<button
				className="arrow arrow-right"
				onClick={next}
				disabled={startIndex + visibleCount >= sortedItems.length}
				aria-label="Volgende verhalen"
			>
				<MdOutlineArrowCircleRight />
			</button>
		</div>
	);
}
