import { useEffect } from "react";
import { useState } from "react"

export default function Search({foodData,setFoodData}){

    const [query,setQuery] = useState("pizza");

    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "27eef40f344c4d2faa776299fc241a74";

    //use effect
    useEffect(() => {
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data.results)
            setFoodData(data.results)
        }
       // fetchFood()

    },[query])

    return (
        <div>

            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            {console.log(query)}


        </div>
    )
}