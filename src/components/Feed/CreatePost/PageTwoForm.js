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
import KeyFForm from './KeyFForm';
import { StyledForm } from '../../Form/Form';
import { COLORS } from '../../../services/Constants/colors';
const { FONT_BLACK, FONT_GRAY } = COLORS;

export default function PageTwoForm({ setPage, postData, setPostData }) {
  const [selectedKey, setSelectedKey] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const inputRef = useRef();
  const initialRef = useRef();

  useEffect(() => {
    if (Object.keys(selectedAnswer).length === 0 && !selectedKey) {
      return initialRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    return inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selectedKey, selectedAnswer]);

  useEffect(() => {
    setSelectedAnswer({});
    setPostData({ ...postData, species: '' });
    // eslint-disable-next-line
  }, [selectedKey]);

  function handleCheckboxChange(e) {
    const { name, value } = e.target;

    const answerStringLength = 1;
    if (value.length > answerStringLength) {
      setPostData({ ...postData, species: value });
    } else {
      setPostData({ ...postData, species: '' });
    }

    const selectedAnswersArray = Object.entries(selectedAnswer);
    const filteredSelectedAnswers = selectedAnswersArray.filter(([key]) => name > key);
    const filteredSelectedAnswersObject = Object.fromEntries(filteredSelectedAnswers);

    setSelectedAnswer({ ...filteredSelectedAnswersObject, [name]: value });
  }

  return (
    <StyledForm onSubmit={() => setPage(1)}>
      <ScrollDiv ref={initialRef} />

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

      {selectedKey === 'F' && <KeyFForm selectedAnswer={selectedAnswer} handleCheckboxChange={handleCheckboxChange} />}

      {postData.species?.length !== 0 && (
        <InputContainer>
          <Label>
            Seu fungo é um: <i>{postData.species}</i>
          </Label>

          <StyledButton type="submit">Sim, parece correto!</StyledButton>

          <Button type="button" onClick={() => setSelectedKey()}>
            Não, refazer o formulário!
          </Button>
        </InputContainer>
      )}

      <ScrollDiv ref={inputRef} />
    </StyledForm>
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
