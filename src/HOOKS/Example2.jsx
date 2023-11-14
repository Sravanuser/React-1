import React, { useState } from 'react'

export default function Example2() {

     const [data, setdata] = useState(true);


     function onChange(){
        setdata(!data);
     }
  return (
    <div>
      <button onClick={onChange}>{data ? "show" : "hide"}</button>

{
    data ? (
        <div>hgdasjhgdsajhgdsjdsghfjsdghf</div>
    ) : (
       <p>hjghh</p>
    )
} 


       
    </div>
  )
}
