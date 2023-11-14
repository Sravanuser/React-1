import React, {useState} from 'react'

export default function UseState() {
  const [data,setData] = useState({firstName:'emma',lastName:'watson', age:23});


  function button(){
    setData({
      ...data,
      firstName:'Anil',
    })
  }


  function button1(){
    setData({
      ...data,
      lastName:'Keerthi',
    })
  }

  return (
    <div>
       <h1>My firstname is {data.firstName}</h1>

       <button onClick={button}>change firstName</button>
       
       <h1>My lastName is {data.lastName}</h1>

       <p> age {data.age}</p>
         
         <button onClick={button1}>change lastName</button>
    </div>
  )
}
