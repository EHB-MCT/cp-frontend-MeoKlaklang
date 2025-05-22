import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../styles/MiniSprookjeCard.css";

export default function MiniSprookjeCard({ id, fairytale, nameStudent, genre, imgThumbnail }) {
	return (
		<div className="mini-card">
			<img src={imgThumbnail} alt={fairytale} className="mini-card-image" />
			<div className="mini-card-content">
				<h4 className="mini-card-author">{nameStudent}</h4>
				<p className="mini-card-title">{fairytale}</p>
				<p className="mini-card-genre">{genre}</p>
			</div>
			<Link
				to={`/making-of/${id}`}
				className="mini-card-link"
				aria-label={`Bekijk ${fairytale}`}
			>
				<IoIosArrowRoundForward />
			</Link>
		</div>
	);
}
