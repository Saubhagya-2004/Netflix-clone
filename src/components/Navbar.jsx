import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/Authcontext";

const Navbar = () => {
  const {user,logout}= userAuth();
  const navigate=useNavigate();

  const handlelogin=async()=>{
    try{
await logout()
navigate('/')
    }catch(err){
      console.log(err.message);
      
    }
  }
  return (
    <nav className="fixed z-50 w-full p-3 md:p-4 lg:p-5 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
      <Link to="/" className="flex items-center">
        <h1 className="text-red-500 uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-red-600 transition-colors duration-300">
          netflix
        </h1>
      </Link>
      {user?.email?
       (<div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        <Link 
          to="/profile" 
          className="text-white text-xs sm:text-sm md:text-base uppercase px-2 sm:px-3 py-1 hover:text-gray-300 transition-colors duration-300"
        >
          Profile
        </Link>
        
          <button onClick={handlelogin}
          className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm md:text-base uppercase px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-md sm:rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
        >
          Log Out
        </button>
      </div>):(
         <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        <Link 
          to="/login" 
          className="text-white text-xs sm:text-sm md:text-base uppercase px-2 sm:px-3 py-1 hover:text-gray-300 transition-colors duration-300"
        >
          login
        </Link>
        <Link
          to="/signup"
          className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm md:text-base uppercase px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-md sm:rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
        >
          Sign up
        </Link>
      </div>
      )}
     
    </nav>
  );
};

export default Navbar;