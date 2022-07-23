import { Link } from "react-router-dom";
import "./CardMovie.css";

function CardMovie({ movie, type }) {
  return (
    <Link className="movie-card-link" to={`/movies/${movie.id}`}>
      <div className={`movie-card-` + type}>
        <div className="movie-card-image-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="Photo Movie"
            className="movie-card-image"
          />
        </div>
        <div className={`movie-card-body-` + type}>
          <h3 className={`movie-card-title-` + type}>{movie.title}</h3>
          <div className={`movie-card-info-` + type}>
            <p className={`movie-card-text-` + type}>{movie.overview}</p>
            <span className={`movie-card-release-` + type}>Release: {movie.release_date}</span>
            <br />
            <span className={`movie-card-rate-` + type}>Rate: {movie.vote_average}/10</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardMovie;
