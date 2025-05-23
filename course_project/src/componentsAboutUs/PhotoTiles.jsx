import ImageTile from "./ImageTile";
import "../styles/PhotoTiles.css";

const images = [
	{ src: `${import.meta.env.BASE_URL}foto1.jpg`, shape: "rounded-bottom-left", x: 18, y: 55, size: 7.5 },
	{ src: `${import.meta.env.BASE_URL}foto2.jpg`, shape: "rounded-top-left", x: 43, y: 25, size: 10 },
	{ src: `${import.meta.env.BASE_URL}foto3.jpg`, shape: "rounded-top-right", x: 45, y: 55, size: 9 },
	{ src: `${import.meta.env.BASE_URL}foto4.jpg`, shape: "rounded-full", x: 73, y: 10, size: 8 },
	{ src: `${import.meta.env.BASE_URL}foto5.jpg`, shape: "rounded-bottom-right", x: 45, y: 81, size: 7 },
	{ src: `${import.meta.env.BASE_URL}foto6.jpg`, shape: "rounded-top-left", x: 20, y: 81, size: 8 },
	{ src: `${import.meta.env.BASE_URL}foto7.jpg`, shape: "rounded-top-right", x: 73, y: 37, size: 8.5 },
	{ src: `${import.meta.env.BASE_URL}foto8.jpg`, shape: "rounded-bottom-right", x: 75, y: 64, size: 8.8 },
];

export default function PhotoTiles() {
	return (
		<div className="grid-container image-offset">
			{images.map((img, index) => (
				<ImageTile
					key={index}
					src={img.src}
					shape={img.shape}
					size={img.size}
					style={{
						top: `${img.y}%`,
						left: `${img.x}%`,
					}}
				/>
			))}
		</div>
	);
}
