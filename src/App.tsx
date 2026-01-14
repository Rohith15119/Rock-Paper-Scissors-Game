import { useRef, useState, useCallback, useEffect } from "react";
import "./App.css";
import Result from "./Result";

type Move = "rock" | "paper" | "scissor" | "reset" | "autoplay";

function App() {
  const [game, setGame] = useState(() => {
    const savedGame = localStorage.getItem("rps-game");
    return savedGame
      ? JSON.parse(savedGame)
      : {
          rock: 0,
          paper: 0,
          scissor: 0,
          wins: 0,
          loss: 0,
          tie: 0,
          feedback: "",
        };
  });

  const [autoPlay, setAutoplay] = useState(false);
  const intervalRef = useRef<number | undefined>(undefined);

  const HandleClick = useCallback((event: any) => {
    event.preventDefault();

    const Humanmove: Move = event.target.className;
    const category = event.target.className as "rock" | "paper" | "scissor";

    const moves: Array<"rock" | "paper" | "scissor"> = [
      "rock",
      "paper",
      "scissor",
    ];
    const computerMove = moves[Math.floor(Math.random() * 3)];
    const ties = computerMove === category;

    if (Humanmove === "rock" && computerMove === "scissor") {
      setGame((p: typeof game) => ({
        ...p,
        rock: p.rock + 1,
        wins: p.wins + 1,
        feedback: "You Won ✅ the Game",
      }));
    } else if (Humanmove === "scissor" && computerMove === "paper") {
      setGame((p: typeof game) => ({
        ...p,
        scissor: p.scissor + 1,
        wins: p.wins + 1,
        feedback: "You Won 🔥 the Game",
      }));
    } else if (Humanmove === "paper" && computerMove === "rock") {
      setGame((p: typeof game) => ({
        ...p,
        paper: p.paper + 1,
        wins: p.wins + 1,
        feedback: "You Won 👊 the Game",
      }));
    } else if (Humanmove === "reset") {
      localStorage.removeItem("rps-game");
      setGame({
        rock: 0,
        paper: 0,
        scissor: 0,
        wins: 0,
        loss: 0,
        tie: 0,
        feedback: "Reset Success ✅",
      });
    } else if (ties) {
      setGame((p: typeof game) => ({
        ...p,
        [category]: p[category] + 1,
        tie: p.tie + 1,
        feedback: "Game Tied 👀",
      }));
    } else {
      setGame((p: typeof game) => ({
        ...p,
        [category]: p[category] + 1,
        loss: p.loss + 1,
        feedback: "Game Lost ❌",
      }));
    }
  }, []);

  const handleAutoPlay = useCallback(() => {
    if (!autoPlay) {
      intervalRef.current = window.setInterval(() => {
        const moves: Array<"rock" | "paper" | "scissor"> = [
          "rock",
          "paper",
          "scissor",
        ];

        const fakeEvent = {
          preventDefault: () => {},
          target: {
            className: moves[Math.floor(Math.random() * 3)],
          },
        };

        HandleClick(fakeEvent);
      }, 500);

      setAutoplay(true);
    } else {
      clearInterval(intervalRef.current);
      setAutoplay(false);
    }
  }, [autoPlay, HandleClick]);

  useEffect(() => {
    localStorage.setItem("rps-game", JSON.stringify(game));
  }, [game]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <Result game={game} />

      <div className="btns">
        <button className="rock" onClick={HandleClick} disabled={autoPlay}>
          {autoPlay ? "🔒 Rock" : "Rock"}
        </button>

        <button className="paper" onClick={HandleClick} disabled={autoPlay}>
          {autoPlay ? "🔒 Paper" : "Paper"}
        </button>

        <button className="scissor" onClick={HandleClick} disabled={autoPlay}>
          {autoPlay ? "🔒 Scissor" : "Scissor"}
        </button>

        <button className="reset" onClick={HandleClick} disabled={autoPlay}>
          {autoPlay ? "🔒 Reset" : "Reset"}
        </button>

        <button className="autoplay" onClick={handleAutoPlay}>
          {autoPlay ? "Stop Auto Play" : "Start Auto Play"}
        </button>
      </div>
    </>
  );
}

export default App;
