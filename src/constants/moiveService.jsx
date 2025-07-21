const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoivedb.org/3";
const endpoints= {
    popular :`${baseUrl}/moive/popular?api_key=${key}`,
    topRated:`${baseUrl}/moive/top_rated?api_key=${key}`,
    trending:`${baseUrl}/moive/popular?api_key=${key}&language=en-US&page=2`,
    comedy:`${baseUrl}/search/moive?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming:`${baseUrl}/moive/upcoming?api_key=${key}`,
};
export default endpoints;