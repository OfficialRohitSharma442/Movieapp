import React from "react";
import "./MovieDetail.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function MovieDetail() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a9ad26e3052c549e985703d686887ea3&language=en-US&page=1`
      );
      // console.log(data);
      SetMovies(results);
    };
    fetchData();
  }, []);
  return (
    <div className="MovieDetail">
      <div className="session1">
        <div className="left">
          {movies.map((item, index) => {
            return (
              <div className="movieThum">
              <img  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}></img>
              <div className="moviesDetailsButtton">
                <p className="movieHeading">{item.name}</p>
                <p>action</p>
                <p> realese Date :1:50</p>
                <div className="buttonStylecontainer">
                  <button className="btn">watch now</button>
                  <button className="btn">Watch leater</button>
                </div>
              </div>
            </div>
            );
          })}
        
        </div>
        <div className="right"></div>
      </div>
      <div className="session2">
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </div>
      <div className="session3">
        <h3> Similer Movies</h3>
        <div className="flex-container">
          <div className="flex-item">
            <img
              src="https://pkrresult.in/wp-content/uploads/2023/01/maxresdefault-16-1024x575.jpg"
              alt=""
            ></img>
            <p className="movie_title">varsu</p>
            <p className="button"> play now</p>
          </div>
          <div className="flex-item">
            <img
              src="https://pkrresult.in/wp-content/uploads/2023/01/maxresdefault-16-1024x575.jpg"
              alt=""
            ></img>
            <p className="movie_title">varsu</p>
            <p className="button"> play now</p>
          </div>
          <div className="flex-item">
            <img
              src="https://pkrresult.in/wp-content/uploads/2023/01/maxresdefault-16-1024x575.jpg"
              alt=""
            ></img>
            <p className="movie_title">varsu</p>
            <p className="button"> play now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
