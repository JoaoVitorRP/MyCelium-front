import Question from '../Question';

export default function KeyCForm({ selectedAnswer, handleCheckboxChange }) {
  return (
    <>
      <Question questionName="C01" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />

      {/* Question C01 */}
      {selectedAnswer.C01 === '1' && (
        <Question questionName="C09" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.C01 === '2' && (
        <Question questionName="C02" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question C02 */}
      {selectedAnswer.C02 === '1' && (
        <Question questionName="C03" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.C02 === '2' && (
        <Question questionName="C06" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question C03 */}
      {selectedAnswer.C03 === '1' && (
        <Question questionName="C04" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.C03 === '2' && (
        <Question questionName="C05" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question C06 */}
      {selectedAnswer.C06 === '1' && (
        <Question questionName="C07" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.C06 === '2' && (
        <Question questionName="C08" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question C09 */}
      {selectedAnswer.C09 === '1' && (
        <Question questionName="C10" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.C09 === '2' && (
        <Question questionName="C11" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
    </>
  );
}
