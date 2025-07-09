import { useEffect, useState } from "react";
import style from '../css/search.module.css'

export default function Search({ foodData, setFoodData }) {

  const [query, setQuery] = useState("pizza");
  const [searchTerm, setSearchTerm] = useState("pizza");

  // const URL = "https://api.spoonacular.com/recipes/complexSearch";
  // const API_KEY = "27eef40f344c4d2faa776299fc241a74";

  const URL = "http://localhost:8080/api/pizza";

  async function fetchFood(term) {
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(data.results);
    setFoodData(data.results);
  }

  useEffect(() => {
    fetchFood(searchTerm); // call only once on load
  }, []); // empty dependency = runs once

  const handleSearch = () => {
    setSearchTerm(query);
    fetchFood(query);
  }

  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={style.searchButton} onClick={handleSearch}>Search</button>
    </div>
  );
}
