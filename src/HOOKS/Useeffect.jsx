import React, { useEffect, useState } from 'react'
const URL ="https://jsonplaceholder.typicode.com/users";
export default function Useeffect() {

const [usersData,setUsersData] = useState([]);

const fetchUsersData = async (apiURL) => {
    const responce = await fetch(apiURL);
    const data = await responce.json();
    setUsersData(data);
}

useEffect(() => {
    fetchUsersData(URL);
},[]);

  return (
    <div>
      <h1>UseEffect Example</h1>
      <ul>
        {
            usersData.map((eachUser) => {
                const {name,userName,email} = eachUser;
                return (
                    <li>
                        <div>{name}</div>
                        <div>{userName}</div>
                        <div>{email}</div>
                        <div></div>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}
