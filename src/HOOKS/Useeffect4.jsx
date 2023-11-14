import React, { useEffect, useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
export default function UseEffect4(){
    const [drinkData,setDrinkData] = useState([]);
    const [searchData,setSearchData] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState({state:false,msg:""})


    const fetchDrink = async (apiURL) => {
        setLoading(true)
        setError({stsus:false,msg:""})
        try{
            const responce = await fetch (apiURL);
            const {drinks} = await responce.json();
            setDrinkData(drinks)
            setLoading(false)
            setError({status:false,msg:""})
            if (!drinks) {
                throw new error ("data not found")
            }
        }
        catch (error) {
            setLoading(false)
            setError({status:true,msg:error.message || "Something went wrong Plese try again"})
        }
    }
      useEffect (() =>{
        const correctURL = `${URL}${searchData}`;
        fetchDrink(correctURL);
      },[searchData])

   return(
    <div className="container-4">
        <form>
            <input type="text" class='search' id="search" placeholder="search for something" value={searchData} onChange={(e) => setSearchData (e.target.value)}></input>
        </form>

        <hr/>
        {
            loading && !error?.status && <h3>Loading...</h3>}
           {Error?.status && <h3 style={{color:'red'}}>{error.msg}</h3>}

        {
           !loading && !Error?.status && <ul className = 'cocktail'>
            {
                drinkData.map((eachItem) =>{
                const {idDrink,strDrink,strDrinkThumb} = eachItem;
                return <li key={idDrink}>
                             <div className="image-3">
                                <img src={strDrinkThumb}/>
                             </div>
                             <div className="para-3">
                                <h3>{strDrink}</h3>
                             </div>
                </li>
            })
            }
           </ul>
        }
    </div>
   )












}