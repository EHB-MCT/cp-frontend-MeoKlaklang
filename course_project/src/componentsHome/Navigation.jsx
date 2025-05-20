import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { SearchContext } from "./SearchContext";
import logo from "../assets/logo.png";
import "../styles/Navigation.css";

export default function Navigation() {
	const [showInput, setShowInput] = useState(false);
	const [showGenres, setShowGenres] = useState(false);
	const { searchTerm, setSearchTerm, setSelectedGenre } = useContext(SearchContext);
	const location = useLocation();
	const navigate = useNavigate();

	const genres = ["ROMANTIEK", "AVONTUUR", "GOED VS KWAAD", "MAGIE"];

	return (
		<nav className="nav">
			<div className="nav-left">
				<img src={logo} alt="Er was eens logo" className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
			</div>

			<div className="nav-right">
				{!showInput && (
					<>
						<div className="nav-item-wrapper">
							<span
								onClick={() => {
									navigate("/");
									setShowGenres(!showGenres);
								}}
								className={location.pathname === "/" ? "active clickable" : "clickable"}
							>
								SPROOKJES
							</span>

							{showGenres && (
								<div className="dropdown">
									{genres.map((genre, idx) => (
										<div
											key={idx}
											className="dropdown-item"
											onClick={() => {
												setSelectedGenre(genre);
												navigate("/");
												setShowGenres(false);
											}}
										>
											{genre}
										</div>
									))}
								</div>
							)}
						</div>

						<Link to="/MakingOf" className={location.pathname === "/MakingOf" ? "active" : ""}>
							MAKING OF
						</Link>
						<Link to="/AboutUs" className={location.pathname === "/AboutUs" ? "active" : ""}>
							ABOUT US
						</Link>
					</>
				)}

				<div className="search-container">
					{showInput && <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Wat zoek je ..." className="search-input" />}
					<button className="search-button" onClick={() => setShowInput(!showInput)} aria-label="Zoek">
						<CiSearch size={22} />
					</button>
				</div>
			</div>
		</nav>
	);
}
