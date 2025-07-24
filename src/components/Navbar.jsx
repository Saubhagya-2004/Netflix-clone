import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute z-100 fixed w-full p-3 cursor-pointer flex items-center  justify-between">
      <Link to="/">
        <h1 className="text-red-500 uppercase font-nsans-bold cursor-pointer text-5xl">
          netflix
        </h1>
      </Link>
      <div>
        <Link to="/login" className="uppercase pr-4">
          login
        </Link>
        <Link
          to="/signup"
          className="uppercase px-6 py-2 bg-red-600 rounded-2xl cursor-pointer"
        >
          Sign up
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
