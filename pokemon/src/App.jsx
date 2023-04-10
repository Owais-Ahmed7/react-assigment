import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import PokemonResult from "./Components/PokemonResult";
import Navbar from "./Components/Navbar";
import PokemonBar from "./Components/PokemonBar";

function App() {
  const [pokemonResult, setPokemonResult] = useState({
    data: [],
    loading: false,
    resExist: true,
  });
  const [name, setName] = useState();
  const [barData, setBarData] = useState();
  const [isBarOpen, setBarOpen] = useState(false);
  const toggleBar = () => setBarOpen(!isBarOpen);

  useEffect(() => {
    if (name) {
      setPokemonResult({
        data: [],
        loading: true,
        resExist: true,
      });
      (async () => {
        try {
          const result = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}/`
          );
          setPokemonResult({
            data: [result.data],
            loading: false,
            resExist: true,
          });
        } catch (error) {
          setPokemonResult({
            data: [],
            loading: false,
            resExist: false,
          });
        }
      })();
    }
  }, [name]);

  return (
    <div className="App">
      <Navbar setName={setName} setPokemonResult={setPokemonResult} />
      <PokemonResult
        pokemonResult={pokemonResult}
        toggleBar={toggleBar}
        setBarData={setBarData}
      />
      <PokemonBar isBarOpen={isBarOpen} toggleBar={toggleBar} data={barData} />
    </div>
  );
}

export default App;
