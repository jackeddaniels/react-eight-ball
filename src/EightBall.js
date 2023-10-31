import answerList from "./answers";
import { useState } from "react";
import _ from "lodash";

/** EightBall displaying random fortunes.
 *
 * Props:
 * - answers: Array of objects containing keys msg and color
 *
 * State:
 * - answer: Objects containing keys msg and color
 *
 * App -> EightBall
 */

function EightBall({answers = answerList}) {
  const [answer, setAnswer] = useState({ color: 'black', msg: 'Think of a Question' });

  function updateEightBall() {
    setAnswer(_.sample(answers));
  }

  return (
    <div
      id="eight-ball"
      style={ {backgroundColor: answer.color} }
      onClick={updateEightBall}>
      <p id="text">{ answer.msg }</p>
    </div>
  )
}

export default EightBall;