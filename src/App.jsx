import "./app.css"
import { useEffect, useMemo, useState } from "react";
import { moneyPyramidData} from "./dummyData"
import Trivia from "./components/Trivia";

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);


  const moneyPyramid = useMemo(
    () => moneyPyramidData, [] );
    
  return (
    <div className="app">
      <div className="main">
      
                <div className="top">
                  <div className="timer">
                    30
                    {/* <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    /> */}
                  </div>
                </div>
                <div className="bottom">
                  <Trivia />
                  {/* <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  /> */}
                </div>
      </div>
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
