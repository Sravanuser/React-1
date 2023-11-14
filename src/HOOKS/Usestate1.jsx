import React, {useState} from 'react'

export default function UseState1() {
  const[firstname,setFirstName] = useState('emma');
  const [lastName,setLastName] = useState('watson');
  const [age,setAge] = useState(23)

  function button(){
    setFirstName('jhsdgfjdh');
  }


  function button1(){
   setLastName('hdsgfsdjhgjhsd');
  }

  function button2(){
    setAge('22')
  } 
  return (
    <div>
       <h1>My firstName is {firstname}</h1>

       <button onClick={button}>change firstName</button>
       
       <h1>My lastName is {lastName}</h1>

       <p> age {age}</p>

       <button onClick={button2}>change age</button>
         
         <button onClick={button1}>change lastName</button>
    </div>
  )
}
