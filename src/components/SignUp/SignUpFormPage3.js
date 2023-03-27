import styled from 'styled-components';
import { Button } from '../Form/Button';
import { StyledForm } from '../Form/Form';
import { Input } from '../Form/Input';
import { Label } from '../Form/Label';
import { AiOutlineCamera } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';
import useSignUp from '../../hooks/api/useSignUp';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { COLORS } from '../../services/Constants/colors';
const { LIGHT_GRAY } = COLORS;

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export default function SignUpFormPage3({ userData, setPageNumber }) {
  const [imageName, setImageName] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const { signUpLoading, signUp } = useSignUp();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectURL = URL.createObjectURL(selectedFile);
    setPreview(objectURL);

    return () => URL.revokeObjectURL(objectURL);
  }, [selectedFile]);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('user', userData.user);
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    formData.append('password', userData.password);

    if (selectedFile) {
      const base64 = await convertBase64(selectedFile);

      formData.append('picture', base64);
    }

    try {
      await signUp(formData);
    } catch (err) {
      if (err.response.status === 409) {
        setPageNumber(1);
      }
    }
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
          Selecione uma foto <br /> (máximo 25MB):
          {selectedFile ? (
            <img src={preview} alt="Selected file" />
          ) : (
            <IconContext.Provider value={{ color: `${LIGHT_GRAY}`, size: '70px' }}>
              <AiOutlineCamera />
            </IconContext.Provider>
          )}
          <ImageName>{imageName}</ImageName>
        </StyledLabel>

        <StyledInput
          type="file"
          accept="image/*"
          id="profilePicture"
          placeholder="Selecione uma foto"
          onChange={handleInputChange}
        />
      </InputFileDiv>

      <Buttons>
        <ButtonDiv>
          <StyledButton onClick={() => setPageNumber(2)} disabled={false}>
            <IconContext.Provider value={{ className: 'react-icons-back' }}>
              <MdOutlineKeyboardArrowLeft />
            </IconContext.Provider>
            Anterior
          </StyledButton>
        </ButtonDiv>

        <ButtonDiv>
          <StyledButton type="submit" disabled={false}>
            {signUpLoading ? 'Loading...' : 'Cadastrar'}
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
