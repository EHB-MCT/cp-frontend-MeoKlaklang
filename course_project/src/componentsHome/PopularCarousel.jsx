import React, { useEffect, useState } from "react";
import SprookjeCard from "./SprookjeCard";
import "../styles/Carousel.css";
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";

export default function PopularCarousel({ dataUrl, visibleCount = 2 }) {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [startIndex, setStartIndex] = useState(0);

	useEffect(() => {
		fetch(dataUrl)
			.then((res) => res.json())
			.then((json) => {
				const views = JSON.parse(localStorage.getItem("views")) || {};
				const sorted = json
					.map((item) => ({
						...item,
						views: views[item.id] || 0,
					}))
					.sort((a, b) => b.views - a.views)
					.slice(0, 10); // top 10 bv.
				setItems(sorted);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, [dataUrl]);

	const prev = () => setStartIndex((i) => Math.max(0, i - visibleCount));
	const next = () => setStartIndex((i) => Math.min(items.length - visibleCount, i + visibleCount));

	if (loading) return <p>Bezig met laden…</p>;

	const visibleItems = items.slice(startIndex, startIndex + visibleCount);

	return (
		<div className="carousel">
			<button className="arrow arrow-left" onClick={prev} disabled={startIndex === 0} aria-label="Vorige verhalen">
				<MdOutlineArrowCircleLeft />
			</button>

			<div className="carousel-grid">
				{visibleItems.map((s, i) => (
					<SprookjeCard
						key={s.id || i}
						id={s.id}
						title={s.title}
						author={s.student}
						genre={s.genre}
						image={s.image}
					/>
				))}
			</div>

			<button className="arrow arrow-right" onClick={next} disabled={startIndex + visibleCount >= items.length} aria-label="Volgende verhalen">
				<MdOutlineArrowCircleRight />
			</button>
		</div>
	);
}
