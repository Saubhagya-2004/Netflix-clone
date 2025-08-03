import React, { useState } from 'react'
import { createImageUrl } from '../constants/moiveService';
import { GoHeart } from 'react-icons/go';
import { TiHeartFullOutline } from 'react-icons/ti';
import {arrayUnion,doc,updateDoc} from 'firebase/firestore'
import { userAuth } from '../context/Authcontext';
import {db} from '../constants/firebase'
const Moiveitem = ({movie}) => {
  const {user}= userAuth();
  const{title,backdrop_path,poster_path} = movie;
  const [like,setLike] = useState(false);
const togglelike=()=>{
  setLike(!like)
}
const makeFav= async()=>{
  const userEmail= user?.email;
  if(userEmail){
    const userDoc= doc(db,"users",userEmail);
    setLike(!like);
    await updateDoc(userDoc,{
      favShows:arrayUnion({...movie})
    })
  }
  else{
    alert('Login to save a Moive..')
  }
}
 return (
  <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
    <img 
      className='w-full h-40 object-cover' 
      src={createImageUrl(backdrop_path ?? poster_path, "w500")} 
      alt={title} 
    />
    
   
    <div className='absolute inset-0 opacity-0 hover:opacity-100 bg-black/50 flex flex-col p-2'>
      <p className='text-white text-xs md:text-sm line-clamp-2'>{title}</p>
      <div className='flex-grow'></div>
      <div 
        className='self-end p-1'
        // onClick={togglelike}
        onClick={makeFav}
      >
        {like ? (
          <TiHeartFullOutline className='text-red-700 duration-500' size={25} />
        ) : (
          <GoHeart size={23} className='text-white' />
        )}
      </div>
    </div>
  </div>
)
}

export default Moiveitem
