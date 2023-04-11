import Question from '../Question';

export default function KeyEForm({ selectedAnswer, handleCheckboxChange }) {
  return (
    <>
      <Question questionName="E01" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />

      {/* Question E01 */}
      {selectedAnswer.E01 === '1' && (
        <Question questionName="E02" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.E01 === '2' && (
        <Question questionName="E05" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question E02 */}
      {selectedAnswer.E02 === '1' && (
        <Question questionName="E03" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.E02 === '2' && (
        <Question questionName="E04" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question E03 */}
      {selectedAnswer.E03 === '2' && (
        <Question questionName="E09" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question E05 */}
      {selectedAnswer.E05 === '1' && (
        <Question questionName="E06" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.E05 === '2' && (
        <Question questionName="E08" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question E06 */}
      {selectedAnswer.E06 === '2' && (
        <Question questionName="E07" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
    </>
  );
}
