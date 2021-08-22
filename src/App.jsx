import "./app.css"
import { useEffect, useMemo, useState } from "react";
import { moneyPyramidData, data} from "./dummyData"
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const moneyPyramid = useMemo(
    () => moneyPyramidData, [] );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

    
  return (
    <div className="app">
      {!username? (
        <Start setUsername={setUsername}/>
      ):(
      <div className="main">
        {
        stop ? (
        <h1 className="endText">You earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  setStop={setStop}
                  questionNumber={questionNumber}
                />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setStop={setStop}
              />
            </div>
            </>
        )}

      </div>
      )}
      <div className="pyramid">
      <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
      </div>
    </div>
  );
}

export default App;
