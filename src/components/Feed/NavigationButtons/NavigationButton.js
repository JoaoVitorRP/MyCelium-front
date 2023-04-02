import styled from 'styled-components';
import { COLORS } from '../../../services/Constants/colors';
const { FONT_BLACK, LIGHT_GRAY, WHITE, RED } = COLORS;

export const NavigationButton = styled.button`
  width: 100px;
  height: 100%;
  padding: 10px;
  background-color: ${(props) => (props.isActive ? `${RED}` : `${WHITE}`)};
  border: none;
  border-radius: 10px;
  margin-right: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? `${WHITE}` : `${FONT_BLACK}`)};

  :hover {
    background-color: ${(props) => (props.isActive ? `${RED}` : `${LIGHT_GRAY}`)};
  }
`;
