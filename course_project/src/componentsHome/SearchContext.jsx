import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");

	return (
		<SearchContext.Provider value={{ searchTerm, setSearchTerm, selectedGenre, setSelectedGenre }}>
			{children}
		</SearchContext.Provider>
	);
}
