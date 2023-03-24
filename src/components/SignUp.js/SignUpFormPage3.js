import styled from 'styled-components';
import { Button } from '../Form/Button';
import { StyledForm } from '../Form/Form';
import { Input } from '../Form/Input';
import { Label } from '../Form/Label';
import { AiOutlineCamera } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { COLORS } from '../../services/Constants/colors';
import { useEffect, useState } from 'react';
const { LIGHT_GRAY } = COLORS;

export default function SignUpFormPage2({ userData, setPageNumber }) {
  const [imageName, setImageName] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectURL = URL.createObjectURL(selectedFile);
    setPreview(objectURL);

    return () => URL.revokeObjectURL(objectURL);
  }, [selectedFile]);

  function handleSubmit(e) {
    e.preventDefault();

    alert('Submitted');
  }

  function handleInputChange(e) {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      setImageName('');
      return;
    }

    setImageName(e.target.files[0].name);
    setSelectedFile(e.target.files[0]);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="profilePicture">Foto de perfil (opcional):</Label>
      <InputFileDiv>
        <StyledLabel htmlFor="profilePicture">
          Selecione um arquivo:
          {!selectedFile && (
            <IconContext.Provider value={{ color: `${LIGHT_GRAY}`, size: '70px' }}>
              <AiOutlineCamera />
            </IconContext.Provider>
          )}
          {selectedFile && <img src={preview} />}
          <ImageName>{imageName}</ImageName>
        </StyledLabel>

        <StyledInput type="file" id="profilePicture" placeholder="Selecione uma foto" onChange={handleInputChange} />
      </InputFileDiv>

      <Buttons>
        <ButtonDiv>
          <StyledButton onClick={() => setPageNumber(2)} disabled={false}>
            Anterior
          </StyledButton>
        </ButtonDiv>

        <ButtonDiv>
          <StyledButton type="submit" disabled={false}>
            Cadastrar
          </StyledButton>
        </ButtonDiv>
      </Buttons>
    </StyledForm>
  );
}

const InputFileDiv = styled.div`
  border: 2px dotted ${LIGHT_GRAY};
  margin-bottom: 25px;

  text-align: center;
`;

const StyledLabel = styled(Label)`
  width: 100%;
  height: 100%;
  padding: 3%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${LIGHT_GRAY};

  img {
    height: 70px;
    margin: 10px 0px;
  }
`;

const ImageName = styled.span``;

const StyledInput = styled(Input)`
  display: none;
`;

const StyledButton = styled(Button)`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  width: 49%;
`;
