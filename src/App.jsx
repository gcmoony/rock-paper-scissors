import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import GameScreen from "./GameScreen"

function App() {
  const [gameStart, setGameStart] = useState(false)

  return (
    <>
      {!gameStart ? (
        <>
          <h1>Rock, Paper, Scissors</h1>
          <p>
            React Game by{" "}
            <a
              href='https://github.com/GCMoony'
              target='_blank'
            >
              GCMoony
            </a>
          </p>
          <button onClick={() => setGameStart(true)}>Play!</button>
        </>
      ) : (
        <GameScreen setGameStart={setGameStart} />
      )}
    </>
  )
}

export default App
