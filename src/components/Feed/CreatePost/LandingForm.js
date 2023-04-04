import styled, { css, keyframes } from 'styled-components';
import { Input } from '../../Form/Input';
import { Label } from '../../Form/Label';
import { StyledForm } from '../../Form/Form';
import { TextArea } from '../../Form/TextArea';
import CheckboxInput from '../../Form/CheckboxInput';
import ImageInput from '../../Form/ImageInput';
import { useState } from 'react';
import { COLORS } from '../../../services/Constants/colors';
import { Button } from '../../Form/Button';
import { ErrorMessage } from '../../Form/ErrorMessage';
import { useRef } from 'react';
const { WHITE, RED } = COLORS;

export default function LandingForm() {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedInput, setSelectedInput] = useState();
  const [fileError, setFileError] = useState(false);

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (!selectedFile) {
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      return setFileError(true);
    }

    alert('Submitted');
  }

  function handleCheckboxChange(e) {
    const { value } = e.target;

    setSelectedInput(value);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer ref={inputRef} error={fileError}>
        <ImageInput
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          label="Selecione uma imagem para postar:"
          loading={false}
          setFileError={setFileError}
        />
        {fileError && <StyledErrorMessage>Por favor, insira uma imagem!</StyledErrorMessage>}
      </InputContainer>

      <InputContainer>
        <Label>Insira uma descrição (opcional):</Label>
        <TextArea placeholder="Escreva algo sobre a foto (até 3000 caracteres)" maxLength={3000} />
      </InputContainer>

      <InputContainer>
        <Label>Você sabe a qual espécie esse fungo pertence?</Label>

        <CheckboxInput
          label="Sim, já sei a espécie!"
          id="yes"
          name="fungi-species"
          isSelected={selectedInput === 'yes'}
          handleCheckboxChange={handleCheckboxChange}
        />
        {selectedInput === 'yes' && (
          <SpeciesInputContainer>
            <StyledLabel htmlFor="species">Insira a espécie aqui:</StyledLabel>
            <StyledInput id="species" placeholder="Cogumelus cogumelus" required />
          </SpeciesInputContainer>
        )}

        <CheckboxInput
          label="Não, preciso de ajuda!"
          id="no"
          name="fungi-species"
          isSelected={selectedInput === 'no'}
          handleCheckboxChange={handleCheckboxChange}
        />
      </InputContainer>

      <Button type="submit">Próximo</Button>
    </StyledForm>
  );
}

const InputContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 25px;
  border: ${(props) => (props.error ? `2px solid ${RED}` : '')};

  animation: ${(props) =>
    props.error
      ? css`
          ${shakeAnimation} 0.2s ease-in-out 0s 2
        `
      : ''};

  display: flex;
  flex-direction: column;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  margin: 10px 0 0 0;
`;

const SpeciesInputContainer = styled.div`
  display: flex;
`;

const StyledLabel = styled(Label)`
  margin: 0 15px 0 0;

  font-size: 18px;
  line-height: 38px;
  white-space: nowrap;
  color: ${RED};
`;

const StyledInput = styled(Input)`
  margin-bottom: 10px;

  font-style: italic;
`;

const shakeAnimation = keyframes`
  0% { margin-left: 0rem; }
  25% { margin-left: 0.5rem; }
  75% { margin-left: -0.5rem; }
  100% { margin-left: 0rem; }
`;
