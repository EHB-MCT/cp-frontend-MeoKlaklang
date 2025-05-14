import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function SprookjeCard({ title, author, genre, image, link }) {
	return (
		<div className="card">
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>door {author}</p>
			<p>{genre}</p>
			<a href={link} className="card-link" aria-label={`Bekijk ${title}`}>
				<IoIosArrowRoundForward />
				{/* hier het icoon */}
			</a>
		</div>
	);
}

export default SprookjeCard;
