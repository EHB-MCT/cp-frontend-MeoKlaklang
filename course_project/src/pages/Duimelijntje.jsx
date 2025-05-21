import React from "react";
import Hero from "../componentsHome/Hero";
import FrogLilySection from "../componentsHome/FrogLillySection";
import StoryLine from "../componentsHome/StoryLine";
import SceneDrie from "../componentsHome/SceneDrie";

export default function Duimelijntje() {
	return (
		<div className="app">
			<StoryLine />
			<Hero />
			<FrogLilySection />
			<SceneDrie />
		</div>
	);
}
