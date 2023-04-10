import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MovieResult from "./Components/MovieResult";
import Navbar from "./Components/Navbar";
import MovieBar from "./Components/MovieBar";

function App() {
  const [movieResult, setMovieResult] = useState({
    data: [],
    loading: false,
    resExist: true,
  });
  const [name, setName] = useState();
  const [barData, setBarData] = useState();
  const [isBarOpen, setBarOpen] = useState(false);
  const toggleBar = () => setBarOpen(!isBarOpen);

  useEffect(() => {
    console.log(name, "request sent 1111");
    if (name) {
      setMovieResult({
        data: [],
        loading: true,
        resExist: true,
      });
      (async () => {
        try {
          console.log(name, "request sent 2222");
          const result = await axios.get(
            `http://www.omdbapi.com/?i=tt3896198&t=${name}&apikey=cba3c06c`
          );
          console.log(result);
          if (result.data.Error) {
            setMovieResult({
              data: [],
              loading: false,
              resExist: false,
            });
          } else {
            setMovieResult({
              data: [result.data],
              loading: false,
              resExist: true,
            });
          }
        } catch (error) {
          setMovieResult({
            data: [],
            loading: false,
            resExist: false,
          });
        }
      })();
    }
  }, [name]);

  console.log(movieResult);

  return (
    <div className="App">
      <Navbar setName={setName} setMovieResult={setMovieResult} />
      <MovieResult
        movieResult={movieResult}
        toggleBar={toggleBar}
        setBarData={setBarData}
      />
      <MovieBar isBarOpen={isBarOpen} toggleBar={toggleBar} data={barData} />
    </div>
  );
}

export default App;
