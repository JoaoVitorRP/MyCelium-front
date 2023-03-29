import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { COLORS } from '../../services/Constants/colors';
import { useState } from 'react';
const { FONT_BLACK, WHITE, RED } = COLORS;

export default function SwapPagesButtons() {
  const [selectedButton, setSelectedButton] = useState(1);

  return (
    <ButtonsContainer>
      <Button isSelected={selectedButton === 1} onClick={() => setSelectedButton(1)}>
        <IconContext.Provider value={{ size: '20px' }}>
          <AiFillHome />
        </IconContext.Provider>
        Home
      </Button>

      <Button isSelected={selectedButton === 2} onClick={() => setSelectedButton(2)}>
        <IconContext.Provider value={{ size: '20px' }}>
          <MdOutlineAddPhotoAlternate />
        </IconContext.Provider>
        Criar post
      </Button>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  height: 100%;
  background-color: transparent;

  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: ${(props) => (props.isSelected ? `${RED}` : `${WHITE}`)};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.isSelected ? `${WHITE}` : `${FONT_BLACK}`)};
`;
