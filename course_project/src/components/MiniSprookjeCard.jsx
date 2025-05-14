import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../styles/MiniSprookjeCard.css";

export default function MiniSprookjeCard({ title, author, genre, image, link }) {
  return (
    <div className="mini-card">
      <img src={image} alt={title} className="mini-card-image" />
      <div className="mini-card-content">
        <h4 className="mini-card-author">{author}</h4>
        <p className="mini-card-title">{title}</p>
        <p className="mini-card-genre">{genre}</p>
      </div>
      <a href={link} className="mini-card-link" aria-label={`Bekijk ${title}`}>
        <IoIosArrowRoundForward />
      </a>
    </div>
  );
}
