import "./App.css";

interface Props {
  game: {
    rock: number;
    paper: number;
    scissor: number;
    wins: number;
    loss: number;
    tie: number;
    feedback: string;
  };
}

function Result(props: Props) {
  return (
    <>
      <div>
        <div className="dashboard">
          <h2> Rock : {props.game.rock} </h2>
          <h2> Paper: {props.game.paper}</h2>
          <h2> Scissor : {props.game.scissor}</h2>
        </div>
        <div className="dashboard">
          <h2> Wins : {props.game.wins} </h2>
          <h2> Loss: {props.game.loss} </h2>
          <h2> Ties: {props.game.tie} </h2>
        </div>

        <div className="dashboard"> {props.game.feedback}</div>
      </div>
    </>
  );
}

export default Result;
