import React, { useEffect, useState } from "react";
import { userAuth } from "../context/Authcontext";
import { db } from "../constants/firebase";
import { createImageUrl } from "../constants/moiveService";
import { arrayRemove, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = userAuth();
  
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) {
          // Ensure no duplicates by using a Set
          const uniqueMovies = [...new Set(doc.data().favShows)];
          setMovies(uniqueMovies);
        }
      });
    }
  }, [user?.email]);

  if (!user) {
    return <h1 className="flex items-center">User not found...</h1>;
  }

  const slide = (offset) => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += offset;
    }
  }
const handleunlike=async(movie)=>{
const userDoc = doc(db,'users',user.email);
await updateDoc(userDoc,{
  favShows:arrayRemove(movie)
})
}
  return (
    <>
      <div>
        <div className="block w-full h-[500px] object-cover relative">
          <img
            className="block w-full h-[500px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
            alt=""
          />
          <div className="bg-black/60 top-0 left-0 w-full h-[500px] fixed" />
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold my-2">My Shows</h1>
            <p className="text-gray-400 text-lg font-sans">{user.email}</p>
          </div>
        </div>

        {/* Movie row */}
        <div className="relative flex items-center group">
          <FaCircleChevronLeft
            onClick={() => slide(-500)}
            size={35}
            className="bg-white absolute rounded-full left-2 opacity-80 z-10 text-black cursor-pointer group-hover:block hidden"
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
          >
            {movies.map((movie, index) => (
      
              <div key={`${movie.id}-${index}`} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
                <img 
                  className='w-full h-40 object-cover' 
                  src={createImageUrl(movie.backdrop_path ?? movie.poster_path, "w500")} 
                  alt={movie.title} 
                />
                <div className='absolute inset-0 opacity-0 hover:opacity-100 bg-black/50 flex flex-col p-2'>
                  <p className='text-white text-xs md:text-sm line-clamp-2'>{movie.title}</p>
                  <p><RxCross1 size={25} className="absolute top-2 right-2" onClick={()=>handleunlike(movie)} /></p>
                  <div className='flex-grow'></div>
                </div>
              </div>
            ))}
          </div>
          <FaChevronCircleRight
            onClick={() => slide(500)}
            size={35}
            className="bg-white absolute rounded-full right-2 opacity-80 z-10 text-black cursor-pointer group-hover:block hidden"
          />
        </div>
      </div>
    </>
  );
};

export default Profile;