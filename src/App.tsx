import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Player } from "./components/Player";

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
                    <Player name="Player1" />
                    <Player name="Player2" />
                  </ol>
                </div>
              </div>
            </main>
        </div>
    );
}

export default App;
