import Question from '../Question';

export default function KeyBForm({ selectedAnswer, handleCheckboxChange }) {
  return (
    <>
      <Question questionName="B01" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />

      {/* Question B01 */}
      {selectedAnswer.B01 === '1' && (
        <Question questionName="B02" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.B01 === '2' && (
        <Question questionName="B06" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question B02 */}
      {selectedAnswer.B02 === '4' && (
        <Question questionName="B03" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question B03 */}
      {selectedAnswer.B03 === '1' && (
        <Question questionName="B04" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.B03 === '2' && (
        <Question questionName="B05" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question B06 */}
      {selectedAnswer.B06 === '1' && (
        <Question questionName="B07" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.B06 === '2' && (
        <Question questionName="B09" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question B07 */}
      {selectedAnswer.B07 === '2' && (
        <Question questionName="B08" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question B09 */}
      {selectedAnswer.B09 === '2' && (
        <Question questionName="B10" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question B10 */}
      {selectedAnswer.B10 === '1' && (
        <Question questionName="B11" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.B10 === '2' && (
        <Question questionName="B12" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Question B12 */}
      {selectedAnswer.B12 === '2' && (
        <Question questionName="B13" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
    </>
  );
}
