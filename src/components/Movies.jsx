import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import Loader from "./Loader";
import Search from "./Search";
const Movies = () => {
  const { movie, isLoading } = useGlobalContext();
  return (
    <>
      <div className="container">
        <h1 className="text-center text-danger mt-2">Welcome to Netflex</h1>
        <Search />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2 g-md-5 g-1">
              {movie.map((item) => {
                const movieName = item.Title.substring(0, 14);
                return (
                  <>
                    <div className="col p-md-4 p-1" key={item.imdbID}>
                      <div className="movie-card p-md-3">
                        <NavLink
                          to={"/movie/" + item.imdbID}
                          className="movie-link"
                        >
                          <div className="thumbnail-box">
                            <h5 title={item.Title} className="text-center">
                              {movieName.length >= 14
                                ? `${movieName}...`
                                : movieName}
                            </h5>
                            {/* <h5 title={item.Title} className='text-center'>{movieName}</h5> */}
                            <img src={item.Poster} alt="" />
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Movies;
