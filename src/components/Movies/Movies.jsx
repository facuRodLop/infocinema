import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../Card_Movie/CardMovie";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/movie/650?api_key=a6e95cd6f3f07fe03806493d08d2d958"
        );
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <CardMovie movie={movies} />
    </div>
  );
}

export default Movies;
