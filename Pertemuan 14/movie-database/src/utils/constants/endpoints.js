const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "http://api.themoviedb.org/3";

const endpoints = {
    POPULAR: `${BASE_URL}/movie/popular/?api_key=${API_KEY}`,
    NOWPLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    TOPRATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    DETAIL: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
    RECOMM: (id) => `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`,
    HEROT: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    HEROD: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
};

export default endpoints;