import React, { useState } from 'react'

export default function Forms1() {

const [firstName,setFirstName] = useState("");
const [password,setPassword] = useState("");
const [email,setEmail] = useState("");

function changeFirstName(e){
    console.log(e.target.value)
    setFirstName(e.target.value);
}
function changePassword(e){
    console.log(e.target.value)
    setPassword(e.target.value);
}
function changeEmail(e){
    console.log(e.target.value)
    setEmail(e.target.value);
}

function defautChange(e){
    e.preventDefault();
}
  return (
    <form onSubmit={defautChange}>
        <div>
           <div>
            <input type='text' class='firstName' id='firstName'placeholder='Entetr Your Name' value={firstName} onChange={changeFirstName} ></input>
           </div> 
           <div>
           <input type='password' class='password' id='password'placeholder='Entetr Your Password' value={password} onChange={changePassword}></input>
           </div>
           <div>
           <input type='email' class='email' id='email'placeholder='Entetr Your Email' value={email} onChange={changeEmail}></input>
           </div>
           <div>
            <button>Submit</button>
           </div>
        </div>
    </form>
  )
}
