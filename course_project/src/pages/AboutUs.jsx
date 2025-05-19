import React from "react";
import "../styles/AboutUs.css";
import Navigation from "../componentsHome/Navigation";
import Footer from "../componentsHome/footer";


export default function AboutUs() {
	return (
		<>
			<Navigation />
			<div className="about-wrapper">
				<div className="about-section">
					<div className="about-text">
						<h2>EHB STUDENTS</h2>
						<p>
							EHB-studenten Front-End Development werken dit semester met React aan een parallax website rond het thema sprookjes.
							<br />
							Ze combineren techniek en creativiteit om een interactieve webervaring te creëren met diepte-effecten en animaties.
							<br />
							Zo leren ze React-componenten, state management en visuele effecten toepassen om hun sprookjeswereld tot leven te brengen.
						</p>
						<button className="about-button" onClick={() => navigate("/")}>
							Bekijk alle sprookjes
						</button>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
