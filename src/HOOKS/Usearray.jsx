import React,{useState} from 'react'


export default function UseArray() {

    const intialArray = [
        {
            firstName:'A',
            lastName : 'M',
            total : 'A M'
        },

        {
            
            firstName:'Array',
            lastName : 'Methods',
            total : 'Array Methods'
        }
    ]

    const [data,setData] = useState(intialArray);

  return (
    <div>
       <ul>
        {
            data.map((eachItem,UseArray) =>{
                const {firstName,lastName,total}= eachItem;


              <li key={UseArray}>
                <div>firstName:{firstName}</div>
                <div>lastName:{lastName}</div>
                <div>total:{total}</div>
              </li>
            }) 
        }
       </ul>  
    </div>
  )
}
