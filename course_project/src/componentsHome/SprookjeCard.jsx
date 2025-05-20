import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

function SprookjeCard({ id, title, author, genre, image }) {
	return (
		<div className="carousel-card">
			<img src={image} alt={title} />
			<h4>{author}</h4>
			<p>{title}</p>
			<p>{genre}</p>
			<Link to={`/making-of/${id}`} aria-label={`Bekijk ${title}`}>
				<IoIosArrowRoundForward className="card-arrow" />
			</Link>
		</div>
	);
}

export default SprookjeCard;
