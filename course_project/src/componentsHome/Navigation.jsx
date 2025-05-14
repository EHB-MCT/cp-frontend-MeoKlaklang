import React from "react";
import "../styles/Navigation.css";

import logo from "../assets/logo.png";

export default function Navigation() {
	return (
		<nav className="nav">
			<div className="nav-left">
				<img
					src={logo} // pas aan als je het logo anders opslaat
					alt="Er was eens logo"
					className="logo"
				/>
			</div>
			<div className="nav-right">
				<a href="/" className="active">
					SPROOKJES
				</a>
				<a href="/MakingOf">MAKING OF</a>
				<a href="#">ABOUT US</a>
				<button className="search-button">🔍</button>
			</div>
		</nav>
	);
}
