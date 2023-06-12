import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "./Loader";
const SingleMovie = () => {
  const [currentMovie, setCurrentMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=fd1c875f&i=${id}`
      );
      const data = await response.json();
      setCurrentMovie(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getMovies();
    }, 2000);
  }, []);
  console.log(currentMovie);
  if (loading === true) {
    return <Loader />;
  } else if (loading === false) {
    return (
      <>
        <div className="container mt-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 mx-auto">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={currentMovie.Poster}
                      className="h-100 img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{currentMovie.Title}</h5>
                      <p className="card-text">
                        Genre:{" "}
                        <small className="text-muted">
                          {currentMovie.Genre}
                        </small>
                      </p>
                      <p className="card-text">
                        Languages:{" "}
                        <small className="text-muted">
                          {currentMovie.Language}
                        </small>
                      </p>
                      <p className="card-text">
                        Released on:{" "}
                        <small className="text-muted">
                          {currentMovie.Released}
                        </small>
                      </p>
                      <p className="card-text">
                        Ratings:{" "}
                        <small className="text-muted">
                          {currentMovie.Ratings[0].Value}
                        </small>
                      </p>
                      <p className="card-text">
                        Description:{" "}
                        <small className="text-muted">
                          {currentMovie.Plot}
                        </small>
                      </p>
                      <NavLink to="/" className="btn btn-primary mt-3">
                        Go Back
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default SingleMovie;
