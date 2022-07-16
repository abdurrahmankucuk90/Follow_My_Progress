import React from 'react'

const ShowData = ({label, image}) => {
  return (
    <div>
        <h1>{label}</h1>
        <img src={image} alt="" />
    </div>
  )
}

export default ShowData