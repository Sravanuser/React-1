import React from 'react'

export default function Props1({name,age,village,state,mandal,image}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{village}</p>
      <p>{age}</p>
      <p>{mandal}</p>
      <p>{state}</p>
      <img src={image}/>
    </div>
  )
}
