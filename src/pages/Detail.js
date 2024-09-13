import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesById } from "../redux/action";
import Loading from "../component/Loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  console.log(movies);

  useEffect(() => {
    dispatch(fetchMoviesById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="detail">
        <Header />
        <main className="container mt-4">
          {loading ? (
            <Loading />
          ) : (
            <>
              {
                <div>
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center">
                      <div class="p-2 flex-fill">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex flex-row">
                              <div class="p-2"><img className="mb-3" src={movies.Poster} alt="poster" /></div>
                              <div class="p-2">
                                <h3 class="card-title">{movies.Title}</h3>
                                <p class="card-text" style={{margin:"0px"}}>{movies.Year} - {movies.Runtime}</p>
                                <p class="card-text"><b>{movies.Genre}</b></p>
                                <p class="card-text" style={{margin:"0px"}}><b>Plot</b></p>
                                <p class="card-text">{movies.Plot}</p>
                                <p class="card-text" style={{margin:"0px"}}><b>Cast</b></p>
                                <p class="card-text">{movies.Actors}</p>
                                <p class="card-text" style={{margin:"0px"}}><b>Director</b></p>
                                <p class="card-text">{movies.Director}</p>
                                <p class="card-text" style={{margin:"0px"}}><b>Ratings</b></p>
                                <div class="d-flex">
                                  <div class="pr-2 flex-fill">
                                    <div class="card">
                                      <div class="card-header p-2 bg-warning text-white text-center"><b>Internet Movie Database</b></div>
                                      <div class="card-body p-2 text-center">{movies.Ratings && movies.Ratings.length > 0 ? (
                  <div className="card-body p-2 text-center">
                    {movies.Ratings[0].Value}
                  </div>
                ) : (
                  "N/A"
                )}</div>
                                    </div>
                                  </div>
                                  <div class="px-2 flex-fill">
                                    <div class="card">
                                      <div class="card-header p-2 bg-warning text-white text-center"><b>Rotten Tomatoes</b></div>
                                      <div class="card-body p-2 text-center">{movies.Ratings && movies.Ratings.length > 0 ? (
                  <div className="card-body p-2 text-center">
                    {movies.Ratings[1].Value}
                  </div>
                ) : (
                  "N/A"
                )}</div>
                                    </div>
                                  </div>
                                  <div class="pl-2 flex-fill">
                                    <div class="card">
                                      <div class="card-header p-2 bg-warning text-white text-center"><b>Metacritic</b></div>
                                      <div class="card-body p-2 text-center">{movies.Ratings && movies.Ratings.length > 0 ? (
                  <div className="card-body p-2 text-center">
                    {movies.Ratings[2].Value}
                  </div>
                ) : (
                  "N/A"
                )}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="p-2 flex-grow-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Detail;
