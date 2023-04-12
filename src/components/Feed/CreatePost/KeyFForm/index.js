import Question from '../Question';

export default function KeyFForm({ selectedAnswer, handleCheckboxChange }) {
  return (
    <>
      <Question questionName="F01" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />

      {/* Question F01 */}
      {selectedAnswer.F01 === '1' && (
        <Question questionName="F02" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.F01 === '2' && (
        <Question questionName="F19" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F02 */}
      {selectedAnswer.F02 === '2' && (
        <Question questionName="F03" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F03 */}
      {selectedAnswer.F03 === '1' && (
        <Question questionName="F04" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.F03 === '2' && (
        <Question questionName="F08" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F04 */}
      {selectedAnswer.F04 === '2' && (
        <Question questionName="F05" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}  

      {/* Question F05 */}
      {selectedAnswer.F05 === '2' && (
        <Question questionName="F06" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F06 */}
      {selectedAnswer.F06 === '2' && (
        <Question questionName="F07" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F08 */}
      {selectedAnswer.F08 === '1' && (
        <Question questionName="F09" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.F08 === '2' && (
        <Question questionName="F15" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F09 */}
      {selectedAnswer.F09 === '1' && (
        <Question questionName="F10" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.F09 === '2' && (
        <Question questionName="F11" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F11 */}
      {selectedAnswer.F11 === '1' && (
        <Question questionName="F12" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.F11 === '2' && (
        <Question questionName="F13" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F13 */}
      {selectedAnswer.F13 === '2' && (
        <Question questionName="F14" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F15 */}
      {selectedAnswer.F15 === '1' && (
        <Question questionName="F16" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.F15 === '2' && (
        <Question questionName="F18" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F16 */}
      {selectedAnswer.F16 === '2' && (
        <Question questionName="F17" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F19 */}
      {selectedAnswer.F19 === '2' && (
        <Question questionName="F20" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question F20 */}
      {selectedAnswer.F20 === '2' && (
        <Question questionName="F21" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
    </>
  );
}
