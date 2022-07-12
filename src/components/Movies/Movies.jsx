import { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../Card_Movie/CardMovie";
import "./Movies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/discover/movie/?api_key=a6e95cd6f3f07fe03806493d08d2d958"
        );
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h2>Action</h2>
      {movies.map((movie) => (
        <CardMovie movie={movie} type={"kind-of-movie"} />
      ))}
      <h2>Drama</h2>
    </div>
  );
}

export default Movies;
