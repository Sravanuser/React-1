import React, { useState } from 'react'

export default function Forms() {

  const [firstName,setFirstName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");

  function changeFirstName(e){
    console.log(e.target.value)
    setFirstName(e.target.value)
  }
  function changePassword(e){
    console.log(e.target.value)
    setPassword(e.target.value)
  }
  function changeEmail(e){
    console.log(e.target.value)
    setEmail(e.target.value)
  }
 function handleSubmit(e){
 e.preventDefault();
 }

 let objet = {
  firstName :firstName,
  password :password,
  email :email
 };
 console.log(objet);
  
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
           <div className='mb-2'>
            <input type='text' name='firstName' id='firstName' value={firstName} placeholder='Enter Your Name' onChange={changeFirstName}></input>
           </div>
           <div className='mb-2 p-2'>
           <input type='password' name='password' id='password' value={password} placeholder='Enter Your Password' onChange={changePassword}></input>
           </div>
           <div className='mb-2'>
           <input type='email' name='email' id='email' value={email} placeholder='Enter Your Email' onChange={changeEmail}></input>
           </div>
           <div>
            <button className='p-1'>Submit</button>
           </div>
      </div>
    </form>
  )
}
