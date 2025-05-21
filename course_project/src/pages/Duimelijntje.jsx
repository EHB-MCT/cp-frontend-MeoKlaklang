import React from "react";
import Hero from "../componentsHome/Hero";
import FrogLillySection from "../componentsHome/FrogLillySection";
import SceneDrie from "../componentsHome/SceneDrie";
import SceneVier from "../componentsHome/SceneVier";
import StoryLine from "../componentsHome/StoryLine";

export default function Duimelijntje() {
	return (
		<div className="duimelijntje-page" style={{ position: "relative" }}>
			<StoryLine /> {/* ⬅️ zet hem HIER */}
			<Hero />
			<FrogLillySection />
			<SceneDrie />
			<SceneVier />
		</div>
	);
}
