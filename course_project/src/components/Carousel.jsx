import React, { useState, useEffect } from "react";
import SprookjeCard from "../components/SprookjeCard";
import "../styles/Carousel.css";

import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";

export default function Carousel({ dataUrl, visibleCount = 2 }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [dataUrl]);

  const prev = () => setStartIndex((i) => Math.max(0, i - visibleCount));
  const next = () =>
    setStartIndex((i) => Math.min(items.length - visibleCount, i + visibleCount));

  if (loading) return <p>Bezig met laden…</p>;

  const visible = items.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="carousel">
      <button
        className="arrow arrow-left"
        onClick={prev}
        disabled={startIndex === 0}
        aria-label="Vorige verhalen"
      >
        <MdOutlineArrowCircleLeft size={40} />
      </button>

      <div className="carousel-grid">
        {visible.map((s, idx) => (
          <SprookjeCard
            key={startIndex + idx}
            title={s.title}
            author={s.student}
            genre={s.genre}
            image={s.image}
            link={s.link}
          />
        ))}
      </div>

      <button
        className="arrow arrow-right"
        onClick={next}
        disabled={startIndex + visibleCount >= items.length}
        aria-label="Volgende verhalen"
      >
        <MdOutlineArrowCircleRight size={40} />
      </button>
    </div>
  );
}
