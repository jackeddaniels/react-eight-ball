import answerList from "./answers";
import { useState } from "react";
import _ from "lodash";

function EightBall({answers = answerList}) {
  const [answer, setAnswer] = useState({ color: 'black', msg: 'Think of a Question' });

  function updateEightball() {
    setAnswer(_.choice(answers));
  }
}