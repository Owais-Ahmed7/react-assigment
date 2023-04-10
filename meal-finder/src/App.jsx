import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Meals from "./Components/Meals";
import Navbar from "./Components/Navbar";
import MealBar from "./Components/MealBar";

function App() {
  const [meals, setMeals] = useState({
    data: [],
    loading: false,
    resExist: true
  });
  const [name, setName] = useState();
  const [barData, setBarData] = useState();
  const [isBarOpen, setBarOpen] = useState(false);
  const toggleBar = () => setBarOpen(!isBarOpen);

  useEffect(() => {
    if (name) {
      setMeals({
        data: [],
        loading: true,
        resExist: true
      });
      try {
      (async () => {
        const result = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        );
        console.log(result)
        setMeals({
          data: result.data.meals,
          loading: false,
          resExist: true
        });
      })();
      } catch (error) {
        setMeals({
          data: result.data.meals,
          loading: false,
          resExist: false
        });
      }
    }
  }, [name]);

  console.log(meals)
  return (
    <div className="App">
      <Navbar setName={setName} setMeals={setMeals} />
      <Meals meals={meals} toggleBar={toggleBar} setBarData={setBarData} />
      <MealBar isBarOpen={isBarOpen} toggleBar={toggleBar} data={barData} />
    </div>
  );
}

export default App;
