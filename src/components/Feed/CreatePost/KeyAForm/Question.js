import CheckboxInput from '../../../Form/CheckboxInput';
import { InputContainer } from '../../../Form/InputContainer';
import { Label } from '../../../Form/Label';
import { KeyAQuestions } from './KeyAQuestions';

export default function Question({ questionName, selectedAnswer, handleCheckboxChange }) {
  return (
    <InputContainer>
      <Label>{KeyAQuestions[questionName].question}</Label>

      {KeyAQuestions[questionName].choices.map((choice, index) => {
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
