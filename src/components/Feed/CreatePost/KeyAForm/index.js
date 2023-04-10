import Question from './Question';

export default function KeyAForm({ selectedAnswer, handleCheckboxChange }) {
  return (
    <>
      <Question questionName="A01" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />

      {/* Questão A01 */}
      {selectedAnswer.A01 === '1' && (
        <Question questionName="A02" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.A01 === '2' && (
        <Question questionName="A05" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A02 */}
      {selectedAnswer.A02 === '1' && (
        <Question questionName="A03" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A03 */}
      {selectedAnswer.A03 === '2' && (
        <Question questionName="A04" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A05 */}
      {selectedAnswer.A05 === '1' && (
        <Question questionName="A06" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.A05 === '2' && (
        <Question questionName="A21" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A06 */}
      {selectedAnswer.A06 === '1' && (
        <Question questionName="A07" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.A06 === '2' && (
        <Question questionName="A10" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A07 */}
      {selectedAnswer.A07 === '1' && (
        <Question questionName="A08" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.A07 === '2' && (
        <Question questionName="A09" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A10 */}
      {selectedAnswer.A10 === '1' && (
        <Question questionName="A11" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.A10 === '2' && (
        <Question questionName="A14" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A11 */}
      {selectedAnswer.A11 === '1' && (
        <Question questionName="A12" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.A11 === '2' && (
        <Question questionName="A13" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A14 */}
      {selectedAnswer.A14 === '1' && (
        <Question questionName="A15" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.A14 === '2' && (
        <Question questionName="A16" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A16 */}
      {selectedAnswer.A16 === '2' && (
        <Question questionName="A17" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A17 */}
      {selectedAnswer.A17 === '1' && (
        <Question questionName="A18" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
      {selectedAnswer.A17 === '2' && (
        <Question questionName="A19" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A19 */}
      {selectedAnswer.A19 === '2' && (
        <Question questionName="A20" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A21 */}
      {selectedAnswer.A21 === '2' && (
        <Question questionName="A22" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}

      {/* Questão A22 */}
      {selectedAnswer.A22 === '2' && (
        <Question questionName="A23" selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />
      )}
    </>
  );
}
