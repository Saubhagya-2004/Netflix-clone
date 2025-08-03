import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./Moiveitem"; // Fixed import name
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(url);
        
        // Filter out movies without images
        const moviesWithImages = response?.data?.results?.filter(movie => 
          movie.backdrop_path || movie.poster_path
        ) || [];
        
        setMovies(moviesWithImages);
      } catch (err) {
        console.error(`Error fetching ${title} movies:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchMovies();
    }
  }, [url, title]);

  const slide = (offset)=>{
     const sliderId = `slider-${title.toLowerCase().replace(' ', '-')}`;
    const slider= document.getElementById(sliderId);
    if(slider){

      slider.scrollLeft= slider.scrollLeft + offset;
    }
  }

  if (loading) {
    return (
      <div className="w-full text-white">
        <h1 className="font-medium md:text-xl p-4 capitalize">{title}</h1>
        <div className="p-4">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-white">
        <h1 className="font-medium md:text-xl p-4 capitalize">{title}</h1>
        <div className="p-4 text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="w-full text-white">
        <h1 className="font-medium md:text-xl p-4 capitalize">{title}</h1>
        <div className="p-4">No movies available</div>
      </div>
    );
  }

  return (
    <div className="w-full text-white">
      <h1 className="font-medium md:text-xl p-4 capitalize">{title}</h1>
      <div className="relative flex items-center group">
        <FaCircleChevronLeft onClick={()=>slide(-500)} size={35} className="bg-white absolute  rounded-full left-2 opacity-80 z-10 text-black cursor-pointer group-hover:block hidden"/>
        <div
          id={`slider-${title.toLowerCase().replace(' ', '-')}`}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <FaChevronCircleRight onClick={()=>slide(500)} size={35} className="bg-white absolute  rounded-full right-2 opacity-80 z-10 text-black cursor-pointer group-hover:block hidden"/>
      </div>
    </div>
  );
};

export default MovieRow;