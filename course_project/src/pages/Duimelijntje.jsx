import React from "react";
import Hero from "../componentsHome/Hero";
import FrogLillySection from "../componentsHome/FrogLillySection";
import SceneDrie from "../componentsHome/SceneDrie";
import SceneVier from "../componentsHome/SceneVier";
import StoryLine from "../componentsHome/StoryLine";
import SceneVijf from "../componentsHome/SceneVijf";
import SceneZes from "../componentsHome/SceneZes";

export default function Duimelijntje() {
	return (
		<div className="duimelijntje-page" style={{ position: "relative" }}>
			<StoryLine /> 
			<Hero />
			<FrogLillySection />
			<SceneDrie />
			<SceneVier />
			<SceneVijf />
			<SceneZes />
		</div>
	);
}
