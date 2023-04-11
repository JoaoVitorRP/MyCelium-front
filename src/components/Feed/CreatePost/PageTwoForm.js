import styled from 'styled-components';
import { InputContainer } from '../../Form/InputContainer';
import KeySelectorForm from './KeySelectorForm';
import { useEffect, useRef, useState } from 'react';
import KeyAForm from './KeyAForm';
import { Label } from '../../Form/Label';
import { Button } from '../../Form/Button';
import KeyBForm from './KeyBForm';
import KeyCForm from './KeyCForm';
import KeyDForm from './KeyDForm';
import KeyEForm from './KeyEForm';
import { COLORS } from '../../../services/Constants/colors';
const { FONT_BLACK, FONT_GRAY } = COLORS;

export default function PageTwoForm() {
  const [selectedKey, setSelectedKey] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [species, setSpecies] = useState();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selectedAnswer]);

  useEffect(() => {
    setSelectedAnswer({});
    setSpecies();
  }, [selectedKey]);

  function handleCheckboxChange(e) {
    const { name, value } = e.target;

    const answerStringLength = 1;
    if (value.length > answerStringLength) {
      setSpecies(value);
    } else {
      setSpecies();
    }

    const selectedAnswersArray = Object.entries(selectedAnswer);
    const filteredSelectedAnswers = selectedAnswersArray.filter(([key]) => name > key);
    const filteredSelectedAnswersObject = Object.fromEntries(filteredSelectedAnswers);

    setSelectedAnswer({ ...filteredSelectedAnswersObject, [name]: value });
  }

  return (
    <>
      <InputContainer>
        <Title>Esse formulário irá te guiar na classificação da espécie de fungo que desejas postar!</Title>
        <Subtitle>
          Baseado em: GUERRERO, Rosa T.; HOMRICH, Maria H. <b>Fungos Macroscópicos Comuns no Rio Grande do Sul</b>: Guia
          para indentificação. 2.ed. Porto Alegre: Editora da Universidade/UFRGS, 1999.
        </Subtitle>
      </InputContainer>

      <KeySelectorForm selectedKey={selectedKey} setSelectedKey={setSelectedKey} />

      {selectedKey === 'A' && <KeyAForm selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />}

      {selectedKey === 'B' && <KeyBForm selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />}

      {selectedKey === 'C' && <KeyCForm selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />}

      {selectedKey === 'D' && <KeyDForm selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />}

      {selectedKey === 'E' && <KeyEForm selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />}

      {selectedKey === 'F' && <></>}

      {species && (
        <InputContainer>
          <Label>
            A espécie é: <i>{species}</i>
          </Label>
          <StyledButton>Sim, parece correto!</StyledButton>
          <Button>Não, refazer o formulário!</Button>
        </InputContainer>
      )}

      <ScrollDiv ref={inputRef} />
    </>
  );
}

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 34px;
  color: ${FONT_BLACK};
`;

const Subtitle = styled.h2`
  margin-top: 10px;

  font-size: 20px;
  line-height: 23px;
  color: ${FONT_GRAY};

  b {
    font-weight: 700;
  }
`;

const StyledButton = styled(Button)`
  margin: 10px 0;
`;

const ScrollDiv = styled.div`
  width: 0;
  height: 0;
`;
