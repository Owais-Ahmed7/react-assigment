import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import useWindowSize from 'react-use/lib/useWindowSize'
import "./App.css";
import CongratAlert from "./Components/CongratAlert";

const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  },
];

function App() {
  const [points, setPoints] = useState({
    user: 0,
    computer: 0,
  });
  const [selected, setSelected] = useState([]);
  const [dispayWinner, setDispayWinner] = useState(false);
  const [userAlert, setUserAlert] = useState(false);
  const [compAlert, setCompAlert] = useState(false);

  // 0 = rock
  // 1 = paper
  // 2 = scissors
  const handleClick = (userVl) => {
    const compValue = computerSelection();
    const userValue = SELECTIONS[userVl];
    const userWinner = isWinner(userValue, compValue);
    const compWinner = isWinner(compValue, userValue);

    if (!dispayWinner) {
      if (selected.length <= 4) {
        setDispayWinner(false);
        if (userWinner) {
          setSelected([
            ...selected,
            {
              user: userValue.emoji,
              comp: compValue.emoji,
              winner: "user",
            },
          ]);
          setPoints({ ...points, user: points.user + 1 });
        } else if (compWinner) {
          setSelected([
            ...selected,
            {
              user: userValue.emoji,
              comp: compValue.emoji,
              winner: "computer",
            },
          ]);
          setPoints({ ...points, computer: points.computer + 1 });
        } else {
          setSelected([
            ...selected,
            {
              user: userValue.emoji,
              comp: compValue.emoji,
              winner: "draw",
            },
          ]);
        }
      }
      if (selected.length > 4) {
        setDispayWinner(true);
        if (points.user > points.computer) setUserAlert(true);
        else if (points.user < points.computer) setCompAlert(true);
      }
    }
  };

  const computerSelection = () => {
    const randomValue = Math.floor(Math.random() * 3);
    return SELECTIONS[randomValue];
  };

  const isWinner = (selection, opponentSelection) => {
    return selection.beats === opponentSelection.name;
  };

  return (
    <div className="App">
      <CongratAlert runAlert={userAlert}>
        <div>
          <button
            onClick={() => {
              setDispayWinner(false);
              setPoints({ user: 0, computer: 0 });
              setSelected([]);
              setUserAlert(false);
              setCompAlert(false);
            }}
          >
            Reset
          </button>
        </div>
        <div class="selections">
          <button
            onClick={() => handleClick(0)}
            class="selection"
            data-selection="rock"
          >
            ✊
          </button>
          <button
            onClick={() => handleClick(1)}
            class="selection"
            data-selection="paper"
          >
            ✋
          </button>
          <button
            onClick={() => handleClick(2)}
            class="selection"
            data-selection="scissors"
          >
            ✌
          </button>
        </div>
        {dispayWinner && (
          <div class="results">
            <div>
              You
              <span class="result-score" data-your-score>
                {points.user || 0}
              </span>
            </div>
            <div data-final-column>
              Computer
              <span class="result-score" data-computer-score>
                {points.computer || 0}
              </span>
            </div>
          </div>
        )}
        {userAlert ? (
          <div className="winner">You Won</div>
        ) : compAlert ? (
          <div className="winner">Computer Won</div>
        ) : null}
        {(selected || []).map((item, idx) => (
          <div className="selections selected-result">
            <div
              class={
                item.winner === "user"
                  ? "result-selection winner"
                  : "result-selection"
              }
            >
              {item.user}
            </div>
            <div
              class={
                item.winner === "computer"
                  ? "result-selection winner"
                  : "result-selection"
              }
            >
              {item.comp}
            </div>
          </div>
        ))}
      </CongratAlert>
    </div>
  );
}

export default App;
