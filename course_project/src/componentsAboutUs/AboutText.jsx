// src/componentsAboutUs/AboutText.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css";

export default function AboutText() {
	return (
		<div className="about-text">
			<h2 className="about-title">EHB STUDENTS</h2>
			<p>
				EHB-studenten Front-End Development werken dit semester met React aan een parallax website rond het thema
				sprookjes.
			</p>
			<p>
				Ze combineren techniek en creativiteit om een interactieve webervaring te creëren met diepte-effecten en
				animaties. Zo leren ze React-componenten, state management en visuele effecten toepassen om hun
				sprookjeswereld tot leven te brengen.
			</p>

			<Link to="/making-of" className="about-button">
				Bekijk alle sprookjes
			</Link>
		</div>
	);
}
