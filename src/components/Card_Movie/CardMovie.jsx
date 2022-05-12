import { Link } from "react-router-dom";
import "./CardMovie.css";

function CardMovie({ movie }) {
  return (
    <Link className="movie-card-link" to={`/movies/${movie.id}`}>
      <div className="movie-card">
        <div className="movie-card-image-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="Photo Movie"
            className="movie-card-image"
          />
        </div>
        <div className="movie-card-body">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-text">{movie.overview}</p>
          <span className="movie-card-release">{movie.release_date}</span>
        </div>
      </div>
    </Link>
  );
}

export default CardMovie;
