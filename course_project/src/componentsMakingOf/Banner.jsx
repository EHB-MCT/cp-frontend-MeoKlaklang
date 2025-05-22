import React from "react";
import "../styles/MakingOf.css";

export default function Banner({ foto, title, student }) {
	return (
		<div
			className="banner"
			style={{
				backgroundImage: `url(${foto})`,
			}}
		>
			<div className="banner-content">
				<h1 className="banner-title">{title}</h1>
				<p className="banner-author">{student}</p>
			</div>
		</div>
	);
}
