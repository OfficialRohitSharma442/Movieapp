import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [movies, SetMovies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a9ad26e3052c549e985703d686887ea3&language=en-US&page=1`
      );
      SetMovies(results);
    };
    fetchData();
  }, []);
  const handleClick = () => {
    navigate("/moviedetail");
  };
  return (
    <div className="Home">
      <div className="flex-container">
        {movies.map((item, index) => {
          return (
            <div Key={index} className="flex-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
              ></img>
              <p className="movie_title">{item.original_title}</p>
              <p className="button" onClick={handleClick}>
                {" "}
                play now
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
