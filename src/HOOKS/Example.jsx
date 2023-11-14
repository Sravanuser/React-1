import React, { useState } from 'react'

export default function Example() {
    const [showData,setShowData] = useState(false);


    function onChange(){
        setShowData(!showData);
    }
  return (
    <div>
      <button onClick={onChange}>{showData ? "hide" : "show"}</button>
      { showData && (
       <p>Nulla nulla amet dolore veniam et do dolore tempor exercitation. Elit irure eu magna commodo pariatur commodo voluptate qui est esse. In deserunt cillum Lorem incididunt quis nisi cupidatat officia adipisicing exercitation. Proident eu deserunt duis labore labore exercitation eiusmod amet cupidatat.</p>
      )
      }
    </div>
  )
}
