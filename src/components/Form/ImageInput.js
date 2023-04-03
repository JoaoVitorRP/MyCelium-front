import styled from 'styled-components';
import { Label } from './Label';
import { Input } from './Input';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { TbPhotoPlus } from 'react-icons/tb';
import { useEffect } from 'react';
import { COLORS } from '../../services/Constants/colors';
const { LIGHT_GRAY } = COLORS;

export default function ImageInput({ selectedFile, setSelectedFile, label, loading }) {
  const [imageName, setImageName] = useState('');
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
    <>
      <Label htmlFor="picture">{label}</Label>
      <InputFileDiv>
        <StyledLabel htmlFor="picture">
          Selecione uma foto <br /> (máximo 25MB):
          {selectedFile ? (
            <img src={preview} alt="Selected file" />
          ) : (
            <IconContext.Provider value={{ color: `${LIGHT_GRAY}`, size: '70px' }}>
              <TbPhotoPlus />
            </IconContext.Provider>
          )}
          <span>{imageName}</span>
        </StyledLabel>

        <StyledInput
          type="file"
          accept="image/*"
          id="picture"
          placeholder="Selecione uma foto"
          onChange={handleInputChange}
          disabled={loading}
        />
      </InputFileDiv>
    </>
  );
}

const InputFileDiv = styled.div`
  border: 2px dotted ${LIGHT_GRAY};
  border-radius: 10px;
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

const StyledInput = styled(Input)`
  display: none;
`;
