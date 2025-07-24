import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../constants/moiveService";
import axios from "axios";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loadedElements, setLoadedElements] = useState({
    title: false,
    playButton: false,
    watchLaterButton: false,
    date: false,
    overview: false,
  });

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response?.data?.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
      setTimeout(
        () => setLoadedElements((prev) => ({ ...prev, title: true })),
        200
      );
      setTimeout(
        () => setLoadedElements((prev) => ({ ...prev, playButton: true })),
        400
      );
      setTimeout(
        () =>
          setLoadedElements((prev) => ({ ...prev, watchLaterButton: true })),
        500
      );
      setTimeout(
        () => setLoadedElements((prev) => ({ ...prev, date: true })),
        800
      );
      setTimeout(
        () => setLoadedElements((prev) => ({ ...prev, overview: true })),
        1000
      );
    });
  }, []);

  if (!movie) {
    return (
      <div className="relative w-full h-screen min-h-[550px] flex items-center justify-center bg-black">
        <div className="text-white text-2xl animate-pulse">Loading...</div>
      </div>
    );
  }

  const { title, release_date, overview, backdrop_path } = movie;

  return (
    <div className="relative w-full h-screen min-h-[550px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path, "original")}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
        <h1
          className={`text-3xl md:text-6xl font-semibold text-white transition-all duration-500 transform ${
            loadedElements.title
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {title}
        </h1>

        <div className="mt-8 mb-4 space-x-5 space-y-6">
          <button
            className={`transition-all duration-500 transform ${
              loadedElements.playButton
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } bg-white text-black px-6 py-2 rounded-md hover:bg-opacity-80 cursor-pointer hover:scale-105`}
          >
            Play
          </button>

          <button
            className={`transition-all duration-500 transform ${
              loadedElements.watchLaterButton
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } bg-gray-600 bg-opacity-70 text-white px-6 py-2 rounded-md hover:bg-gray-800 cursor-pointer hover:scale-105`}
          >
            Watch Later
          </button>

          <p
            className={`transition-all duration-500 transform ${
              loadedElements.date
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } text-gray-300 text-sm md:text-md lg:text-2xl`}
          >
            {release_date}
          </p>

          <p
            className={`transition-all duration-500 transform ${
              loadedElements.overview
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } text-justify text-sm lg:text-md xl:text-lg w-full  md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200`}
          >
            {isExpanded ? overview : overview.slice(0, 150)}
            {overview.length > 150 && (
              <>
                {!isExpanded && "..."}
                <button
                  className="text-blue-400 hover:underline ml-1 focus:outline-none"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
