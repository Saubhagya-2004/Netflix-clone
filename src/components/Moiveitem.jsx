import React from 'react'

const Moiveitem = ({movie}) => {
  return (
    <div>
      <p>{`${movie.title} | ${movie.id}`}</p>
    </div>
  )
}

export default Moiveitem
