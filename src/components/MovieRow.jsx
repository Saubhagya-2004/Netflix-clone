import axios from "axios";
import React, { useEffect, useState } from "react";
import Moiveitem from "./Moiveitem";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => setMovies(response?.data?.results));
  });
  console.log(movies);

  return (
    <div className=" w-full text-white">
      <h1 className="font-medium md:text-xl p-4 capitalize">{title}</h1>
      <div className="relative flex items-center">
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide "
        >
          {movies.map((moive) => (
           <Moiveitem key={moive.id} movie={moive}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
