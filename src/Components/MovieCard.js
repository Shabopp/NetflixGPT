// MovieCard.js
import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import './MovieCard.css';

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="movie-card-container">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="movie-card-image"
      />
      <div className="movie-card-overlay">
        <div className="movie-info">
          
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
