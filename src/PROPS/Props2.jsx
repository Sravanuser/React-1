import React from 'react'

export default function Props2({id,email,name,body}) {
  return (
   <li>
    <div>
        <h3 className='email'>{email}</h3>
        <h2 className='title-1'>{name}</h2>
        <div className='para-1'>{body}</div>
    </div> 
   </li>
  )
}
