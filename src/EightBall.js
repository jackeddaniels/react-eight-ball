import './Eightball.css';
import answerList from "./answers";
import { useState } from "react";
import _ from "lodash";

/** EightBall displaying random fortunes.
 *
 * Props:
 * - answers: Array of objects containing keys msg and color:
 *  [{ msg [string], color [string] }, ...]
 *
 * State:
 * - answer: Objects containing keys msg and color:
 *  { msg [string], color [string] }
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
      className="Eightball"
      style={ {backgroundColor: answer.color} }
      onClick={updateEightBall}>
      <p className="Eightball-text">{ answer.msg }</p>
    </div>
  )
}

export default EightBall;