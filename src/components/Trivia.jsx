import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

export default function Trivia() {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  return (
    <div className="trivia">
      <div className="question">What's the best youtube channel? </div>
      <div className="answers">
          <div className="answer"> lama dev </div>
          <div className="answer"> rona dev </div>
          <div className="answer"> yemi dev </div>
          <div className="answer"> afeez dev </div>
      </div>
    </div>
  );
}
