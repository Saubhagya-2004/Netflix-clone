import React, { useState } from 'react'
import { createImageUrl } from '../constants/moiveService';
import { GoHeart } from 'react-icons/go';
import { TiHeartFullOutline } from 'react-icons/ti';

const Moiveitem = ({movie}) => {
  const{title,backdrop_path,poster_path} = movie;
  const [like,setLike] = useState(false);
const togglelike=()=>{
  setLike(!like)
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
        onClick={togglelike}
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
