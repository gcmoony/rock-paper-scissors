export default function ScoreBoard({ playerScore, computerScore }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",

        placeContent: "center",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <div style={{ padding: ".5em 2rem", fontWeight: "bold" }}>You</div>
      <div style={{ padding: ".5em 2rem", fontWeight: "bold" }}>Computer</div>
      <div style={{ padding: ".5em 2rem" }}>{playerScore}</div>
      <div style={{ padding: ".5em 2rem" }}>{computerScore}</div>
    </div>
  )
}
