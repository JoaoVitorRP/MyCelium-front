import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { COLORS } from '../services/Constants/colors';
const { FONT_BLACK } = COLORS;

export default function Logo({ height, fontSize }) {
  return (
    <LogoDiv height={height} fontSize={fontSize}>
      <img src={logo} alt="Logo" />
      MyCelium
    </LogoDiv>
  );
}

const LogoDiv = styled.div`
  width: auto;
  height: ${(props) => props.height}px;
  cursor: pointer;

  display: flex;
  align-items: center;

  font-family: 'Delicious Handrawn';
  font-size: ${(props) => props.fontSize}rem;
  color: ${FONT_BLACK};

  img {
    height: 100%;
    border-radius: 10px;
    margin-right: 3.5%;
  }
`;
