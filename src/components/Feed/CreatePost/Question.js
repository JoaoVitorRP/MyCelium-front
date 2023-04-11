import CheckboxInput from '../../Form/CheckboxInput';
import { InputContainer } from '../../Form/InputContainer';
import { Label } from '../../Form/Label';
import { KeyAQuestions } from './KeyAForm/KeyAQuestions';
import { KeyBQuestions } from './KeyBForm/KeyBQuestions';

const keyQuestions = { A: { ...KeyAQuestions }, B: { ...KeyBQuestions } };

export default function Question({ questionName, selectedAnswer, handleCheckboxChange }) {
  const keyName = questionName[0];
  const selectedKeyQuestions = keyQuestions[keyName];

  return (
    <InputContainer>
      <Label>{selectedKeyQuestions[questionName].question}</Label>

      {selectedKeyQuestions[questionName].choices.map((choice, index) => {
        return (
          <CheckboxInput
            label={choice.label}
            id={choice.id}
            name={questionName}
            isSelected={selectedAnswer[questionName] === `${choice.id}`}
            handleCheckboxChange={handleCheckboxChange}
            key={index}
          />
        );
      })}
    </InputContainer>
  );
}
