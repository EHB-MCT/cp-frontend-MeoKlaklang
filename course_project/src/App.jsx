import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Verander dit

import Portal from "./pages/Portal";
import Duimelijntje from "./pages/Duimelijntje";
import MakingOf from "./pages/MakingOf";
import AboutUs from "./pages/AboutUs";

export default function App() {
	return (
		<Router> 
			<Routes>
				<Route path="/" element={<Portal />} />
				<Route path="/duimelijntje" element={<Duimelijntje />} />
				<Route path="/making-of/:id" element={<MakingOf />} />
				<Route path="/AboutUs" element={<AboutUs />} />
			</Routes>
		</Router>
	);
}
