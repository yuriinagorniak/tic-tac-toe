import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <header>
                <h1>Tic-Tac-Toe</h1>
            </header>
            <main>
              <div id="game-container">
                <div>
                  <ol id="players">
                    <li>
                      <p className="player-name">Player1</p>
                      <p className="player-symbol">X</p>
                      <button>Edit</button>
                    </li>
                    <li>
                      <p className="player-name">Player1</p>
                      <p className="player-symbol">X</p>
                      <button>Edit</button>
                    </li>
                  </ol>
                </div>
              </div>
            </main>
        </div>
    );
}

export default App;
