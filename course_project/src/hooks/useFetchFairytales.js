import { useState, useEffect } from "react";

export const useFetchFairytales = () => {
	const [fairytales, setFairytales] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
				);
				if (!response.ok) throw new Error("Failed to fetch data");

				const data = await response.json();
				setFairytales(data);
			} catch (err) {
				console.error("Error fetching fairytales:", err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return { fairytales, isLoading };
};
