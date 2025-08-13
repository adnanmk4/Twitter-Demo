import React from 'react'

const name = ["Adnan", "Saif"];

const Post = () => {

const ChossenName = Math.random() > 0.5 ? name[0] : name[1];

  return (
    <div>
        <p>{ChossenName}</p>
        <p>Post content goes here...</p>
    </div>
  )
}

export default Post