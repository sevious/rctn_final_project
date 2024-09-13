import axios from "axios";

// const API_URL = "https://www.omdbapi.com/?s=man&apikey=6bfc0a89"; // Replace with your actual API key
const API_URL = "http://www.omdbapi.com/";
const API_KEY = "6bfc0a89";

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_REQUEST" });
    const response = await axios.get(`${API_URL}?s=man&apikey=${API_KEY}`);
    const data = response.data.Search;
    // console.log(data);

    dispatch({ type: "DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DATA_FAILED", payload: error });
    console.error("Error fetching movies:", error);
  }
};
export const fetchMoviesById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DATA_ID_REQUEST" });
    const response = await axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`);
    const data = response.data;
    dispatch({ type: "DATA_ID_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DATA_ID_FAILED", payload: error });
    console.error("Error fetching movies:", error);
  }
};

export const searchMovies = (searchTerm) => {
  return async (dispatch) => {
    dispatch({ type: "DATA_REQUEST" });
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
      );
      const data = response.data.Search;

      dispatch({ type: "SEARCH_MOVIES", payload: data });
    } catch (error) {
      dispatch({ type: "DATA_FAILED", payload: error.message });
    }
  };
};
