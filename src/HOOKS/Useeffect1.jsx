import React, { useEffect, useState } from 'react'

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=l"


export default function UseEffect1(){
    const [drinkData,setDrinkData] = useState([]);

    const fetchDrink = async (apiURL) => {
        const response = await fetch(apiURL);
        const { drinks } = await response.json();
        setDrinkData(drinks);
    };

    useEffect(() =>{
        fetchDrink(URL);
    },[]);

return(
    <div className='container-4'>
       <form className='box '>
         <input type='text' className='search' id='search' placeholder='search for something'></input>
       </form>

    <hr/>

    <ul className='cocktail'>
        {
            drinkData.map((eachDrink) =>{
                const {idDrink,strDrink,strDrinkThumb}= eachDrink;
                return <li key={idDrink}>
                            <div className='image-3'>
                                <img src={strDrinkThumb} alt={strDrink}/>
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