import { motion } from "framer-motion";
import "../styles/PhotoTiles.css";

export default function ImageTile({ src, shape = "", size = 10, style = {} }) {
	return (
		<div
			className={`tile ${shape}`}
			style={{
				width: `${size}rem`,
				height: `${size}rem`,
				position: "absolute",
				transform: "translate(-50%, -50%)",
				overflow: "hidden",
				...style,
			}}
		>
			<motion.img
				src={src}
				alt=""
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.05 }}
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
				}}
			/>
		</div>
	);
}
