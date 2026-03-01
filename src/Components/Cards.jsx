import React from "react";
import toast from "react-hot-toast";
import "./Cards.css";
import { useMovieContext } from "../Context/FavoriteContext";

function Cards({ card }) {
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(card.id)

  function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(card.id)
        else addToFavorites(card)
    }

  const imageUrl = card.poster_path
    ? `https://image.tmdb.org/t/p/w500${card.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="display-card">
      <div className="card-poster">
        <img src={imageUrl} alt={card.title} />
        <div className="card-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    💕
                </button>
        </div>
      </div>

      <div className="card-info">
        <h3>{card.title}</h3>
        <p>{card.release_date}</p>
      </div>
    </div>
  );
}

export default Cards;