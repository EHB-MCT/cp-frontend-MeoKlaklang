import ImageTile from "./ImageTile";
import "../styles/PhotoTiles.css";

const images = [
	{ src: "/foto1.jpg", shape: "rounded-bottom-left", x: 22, y: 55, size: 7.5 },
	{ src: "/foto2.jpg", shape: "rounded-top-left", x: 43, y: 25, size: 11 },
	{ src: "/foto3.jpg", shape: "rounded-top-right", x: 45, y: 55, size: 9 },
	{ src: "/foto4.jpg", shape: "rounded-full", x: 70, y: 10, size: 8 },
	{ src: "/foto5.jpg", shape: "rounded-bottom-right", x: 45, y: 81, size: 7 },
	{ src: "/foto6.jpg", shape: "rounded-top-left", x: 10, y: 81, size: 8 },
	{ src: "/foto7.jpg", shape: "rounded-top-right", x: 71, y: 37, size: 8.5 },
	{ src: "/foto8.jpg", shape: "rounded-bottom-right", x: 72, y: 64, size: 8.8 },
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
