import styled from 'styled-components';
import { Button } from '../Form/Button';
import { StyledForm } from '../Form/Form';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import useSignUp from '../../hooks/api/useSignUp';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import LoadingDots from '../Form/Loading';
import { ErrorMessage } from '../Form/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ImageInput from '../Form/ImageInput';

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

export default function SignUpFormPage3({ error, setError, userData, setPageNumber }) {
  const [selectedFile, setSelectedFile] = useState();
  const [fileError, setFileError] = useState(false);

  const { signUpLoading, signUp } = useSignUp();
  const navigate = useNavigate();

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

      toast.success('Cadastro concluído com sucesso!');

      navigate('/');
    } catch (err) {
      if (err.response.status === 409) {
        setError(err.response.data.message);
        return setPageNumber(1);
      }

      if (err.response.status === 400) {
        return setFileError(true);
      }
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ImageInput
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        label={'Foto de perfil (opcional):'}
        loading={signUpLoading}
        setFileError={setFileError}
      />

      {fileError && <StyledErrorMessage>A imagem deve ser menor que 25MB!</StyledErrorMessage>}

      <Buttons>
        <ButtonDiv>
          <Button type="button" onClick={() => setPageNumber(2)} disabled={signUpLoading}>
            <IconContext.Provider value={{ className: 'react-icons-back' }}>
              <MdOutlineKeyboardArrowLeft />
            </IconContext.Provider>
            Anterior
          </Button>
        </ButtonDiv>

        <ButtonDiv>
          <Button type="submit" disabled={signUpLoading}>
            {signUpLoading ? <LoadingDots /> : 'Cadastrar'}
          </Button>
        </ButtonDiv>
      </Buttons>
    </StyledForm>
  );
}

const StyledErrorMessage = styled(ErrorMessage)`
  margin: 10px 0 0 0;
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 25px;

  display: flex;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  width: 49%;
`;
