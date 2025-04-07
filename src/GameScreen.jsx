import { useEffect, useState } from "react"
import ScoreBoard from "./ScoreBoard"

export default function GameScreen({ setGameStart }) {
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  const [playerHand, setPlayerHand] = useState()
  const [computerHand, setComputerHand] = useState()

  const [roundMessage, setRoundMessage] = useState("")

  const [winner, setWinner] = useState("")
  const [isComparing, setIsComparing] = useState(false)
  const [showingSummary, setShowingSummary] = useState(false)

  useEffect(() => {
    if (playerHand && computerHand && isComparing) {
      handleUpdateScore()
      setTimeout(() => {
        setPlayerHand("")
        setComputerHand("")
        setRoundMessage("")
        setShowingSummary(false)
      }, 3000)
    }

    if (!isComparing && !winner) {
      checkForWinner()
    }
  }, [playerHand, computerHand, isComparing, winner])

  function handleRestart() {
    setPlayerScore(0)
    setComputerScore(0)
    setWinner("")
  }

  const maxRounds = 3

  const options = {
    "🪨": "✂️",
    "📃": "🪨",
    "✂️": "📃",
  }

  const choices = ["🪨", "📃", "✂️"]

  function checkForWinner() {
    if (playerScore == maxRounds) {
      setWinner("You win!")
    }
    if (computerScore == maxRounds) {
      setWinner("You lost!")
    }
  }

  function handleUpdateScore() {
    if (options[playerHand] == computerHand) {
      setPlayerScore((prev) => prev + 1)
      setRoundMessage(
        <div>
          {playerHand} <strong>beats</strong> {computerHand}
          <br /> You win this round!
        </div>
      )
    } else if (options[computerHand] == playerHand) {
      setComputerScore((prev) => prev + 1)
      setRoundMessage(
        <div>
          {playerHand} <em>loses</em> against {computerHand}
          <br /> You lose this round!
        </div>
      )
    } else {
      setRoundMessage(
        <div>
          {computerHand} vs. {playerHand}
          <br />
          It's a draw!
        </div>
      )
    }
    setIsComparing(false)
    setShowingSummary(true)
  }

  function handleComputerSelect() {
    return choices[Math.floor(Math.random() * 3)]
  }
  function handlePlayerSelect(e) {
    console.log("pressed")
    setPlayerHand((prev) => (prev = e.target.value))
    setComputerHand(handleComputerSelect)
    setIsComparing(true)
  }

  return (
    <div>
      <ScoreBoard
        playerScore={playerScore}
        computerScore={computerScore}
      />
      <br />
      {!roundMessage && !winner ? (
        <>
          <div>Choose your play:</div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "1.25rem",
            }}
          >
            <button
              value={"🪨"}
              onClick={(e) => handlePlayerSelect(e)}
            >
              🪨
            </button>
            <button
              value={"📃"}
              onClick={(e) => handlePlayerSelect(e)}
            >
              📃
            </button>
            <button
              value={"✂️"}
              onClick={(e) => handlePlayerSelect(e)}
            >
              ✂️
            </button>
          </div>
        </>
      ) : (
        <>{roundMessage}</>
      )}
      {!showingSummary && winner && (
        <div>
          <h3>{winner}</h3>

          <button onClick={handleRestart}>Play again</button>
          <br />
          <br />
          <button onClick={() => setGameStart(false)}>Quit</button>
        </div>
      )}
    </div>
  )
}
