import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = "0d3c5cf005a3e34c6ed5c810891bb5ec"

export const getPopularMovies = async () => {
    const resp = await axios.get(`${API_URL}movie/popular?api_key=${API_KEY}`);
    return resp.data.results
}

export const getUpcomingMovies = async () => {
    const resp = await axios.get(`${API_URL}movie/upcoming?api_key=${API_KEY}`);
    return resp.data.results
}

export const getPopularTv = async () => {
    const resp = await axios.get(`${API_URL}tv/popular?api_key=${API_KEY}`);
    return resp.data.results
}

export const getFamilyMovies = async () => {
    const resp = await axios.get(
      `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=10751`,
    );
    return resp.data.results;
  };
  

export const getDocumentaryMovies = async () => {
    const resp = await axios.get(
        `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=99`,
    );
    return resp.data.results;
};