import React from "react";
import "../styles/footer.css";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Footer() {
	const navigate = useNavigate();

	return (
		<footer className="footer">
			<div className="footer-content">
				<img src={logo} alt="Er was eens logo" className="logo-footer" />
				<div className="footer-text">
					<p>23 studenten van de opleiding MCT die kozen voor het vak Front-End Design. Met een dosis creativiteit, code en een flinke scheut verbeelding verzamelden ze hier al hun sprookjes. Benieuwd wie wij zijn?</p>
					<button className="footer-button" onClick={() => navigate("/AboutUs")}>
						About us
					</button>
				</div>
			</div>
		</footer>
	);
}
