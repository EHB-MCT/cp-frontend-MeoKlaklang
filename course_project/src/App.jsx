// src/App.jsx
import React from "react";
import "./styles/App.css";
import Hero from "./components/Hero";
import FrogLilySection from "./components/FrogLillySection";

export default function App() {
	return (
		<div className="app">
			<Hero />
			<FrogLilySection />
		</div>
	);
}
