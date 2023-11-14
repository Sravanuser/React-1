import React, {useState} from 'react'

export default function Count() {
    const[count,setCount]=useState(10);

    function onIncrese(){
        setCount(count + 10);
    };

    function onDecrese(){
        setCount(count-10);
    };
  return (
    <div className='container-2'>
      <button className='title-2' onClick={onIncrese}>INCREMENT</button>
      <span className='title-3'>{count}</span>
      <button className='title-4' onClick={onDecrese}>DECREMENT</button>
    </div>
  )
}
