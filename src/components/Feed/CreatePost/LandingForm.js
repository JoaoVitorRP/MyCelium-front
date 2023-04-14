import styled from 'styled-components';
import { Input } from '../../Form/Input';
import { Label } from '../../Form/Label';
import { StyledForm } from '../../Form/Form';
import { TextArea } from '../../Form/TextArea';
import ImageInput from '../../Form/ImageInput';
import { useEffect, useState } from 'react';
import { Button } from '../../Form/Button';
import { ErrorMessage } from '../../Form/ErrorMessage';
import { useRef } from 'react';
import { InputContainer } from '../../Form/InputContainer';
import useCreatePost from '../../../hooks/api/useCreatePost';
import LoadingDots from '../../Form/Loading';
import { COLORS } from '../../../services/Constants/colors';
import { toast } from 'react-toastify';
const { RED } = COLORS;

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

export default function LandingForm({
  selectedFile,
  setSelectedFile,
  setPage,
  postData,
  setPostData,
  handleInputChange,
}) {
  const [fileError, setFileError] = useState(false);

  const { createPost, createPostLoading } = useCreatePost();

  const inputRef = useRef();
  const divRef = useRef();
  const initialRef = useRef();

  useEffect(() => {
    if (postData.species.length === 0) {
      return initialRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    return divRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [postData.species]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!selectedFile) {
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      return setFileError(true);
    }

    const base64 = await convertBase64(selectedFile);

    const formData = new FormData();

    formData.append('image', base64);
    formData.append('species', postData.species);

    if (formData.description?.length !== 0) {
      formData.append('description', postData.description);
    }

    try {
      await createPost(formData);
    } catch (err) {
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      return setFileError(true);
    }

    toast.success('Post feito com sucesso!');
    setSelectedFile();
    setPostData({
      description: '',
      species: '',
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ScrollDiv ref={initialRef} />

      <InputContainer ref={inputRef} error={fileError}>
        <ImageInput
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          label="Selecione uma imagem para postar:"
          loading={false}
          setFileError={setFileError}
        />
        {fileError && <StyledErrorMessage>Por favor, insira uma imagem de até 25MB!</StyledErrorMessage>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor="picture">Insira uma descrição (opcional):</Label>
        <TextArea
          id="description"
          name="description"
          placeholder="Escreva algo sobre a foto (até 3000 caracteres)"
          maxLength={3000}
          value={postData.description}
          onChange={handleInputChange}
        />
      </InputContainer>

      <InputContainer>
        <Label>Insira a espécie do seu fungo:</Label>

        <StyledInput
          id="species"
          name="species"
          placeholder="Cogumelus cogumelus"
          value={postData.species}
          onChange={handleInputChange}
          required
        />

        <HelpLink onClick={() => setPage(2)}>Não sei a espécie, necessito de ajuda!</HelpLink>
      </InputContainer>

      <Button type="submit">{createPostLoading ? <LoadingDots /> : 'Postar'}</Button>

      <ScrollDiv ref={divRef} />
    </StyledForm>
  );
}

const StyledErrorMessage = styled(ErrorMessage)`
  margin: 10px 0 0 0;
`;

const HelpLink = styled.span`
  margin-top: 5px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;
  color: ${RED};
`;

const StyledInput = styled(Input)`
  margin-bottom: 10px;

  font-style: italic;
`;

const ScrollDiv = styled.div`
  width: 0;
  height: 0;
`;
