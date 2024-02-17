import { useEffect, useState } from "react";
import SearchIcon from "../assets/search.svg";
import MovieCard from "./constants/MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=945745f7";
// const movie1 = {
//   Title: "Spiderman and Grandma",
//   Year: "2009",
//   imdbID: "tt1433184",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg",
// };

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("driver");
  }, []);

  return (
    <div className="app">
      <h1>Inc.Movies</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Title"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movies[0]} /> */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Navbar;
