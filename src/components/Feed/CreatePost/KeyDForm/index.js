import Question from '../Question';

export default function KeyDForm({ selectedAnswer, handleCheckboxChange }) {
  return (
    <>
      <Question questionName="D01" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />

      {/* Question D01 */}
      {selectedAnswer.D01 === '1' && (
        <Question questionName="D02" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.D01 === '2' && (
        <Question questionName="D05" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question D02 */}
      {selectedAnswer.D02 === '1' && (
        <Question questionName="D03" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.D02 === '2' && (
        <Question questionName="D04" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question D05 */}
      {selectedAnswer.D05 === '1' && (
        <Question questionName="D06" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.D05 === '2' && (
        <Question questionName="D07" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question D07 */}
      {selectedAnswer.D07 === '2' && (
        <Question questionName="D08" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
    </>
  );
}
