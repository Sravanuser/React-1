import React, { useEffect, useState } from 'react'

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
export default function UseEffect2() {

const [drinkData,setDrinkData] = useState([]);
const [searchData,setSearchData] = useState('');

const fetchDrink = async (apiURL) =>{
    const responce = await fetch(apiURL);
    const {drinks} = await responce.json();
    setDrinkData(drinks)
}



  useEffect(() => {
    const correctURL = `${URL}${searchData}`;
    fetchDrink(correctURL)
  },[searchData])


  return (
    <div className='container-4'>
       <form>
        <input type='text' className='search' id='search' placeholder='search for something' value={searchData} onChange={(e) => setSearchData(e.target.value) }></input>
       </form> 
       <hr/>

       <ul className='cocktail'>
        {
            drinkData.map((eachItem)=>{
                const {idDrink,strDrink,strDrinkThumb} = eachItem;
                return <li key={idDrink}>
                               <div className='image-3'>
                                <img src={strDrinkThumb}/>
                               </div>
                               <div className='para-3'>
                                <h3>{strDrink}</h3>
                               </div>
                </li>
            })
        }
       </ul>     
    </div>
  )
}
