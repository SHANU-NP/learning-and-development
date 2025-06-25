import { useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";
import "./App.css"
function App() {
  const [count, setCount] = useState(0);
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />

      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
