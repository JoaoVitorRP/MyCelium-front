import styled from 'styled-components';
import { COLORS } from '../../../services/Constants/colors';
import { device } from '../../../services/Constants/breakpoints';
const { FONT_BLACK, LIGHT_GRAY, WHITE, RED } = COLORS;

export const NavigationButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: ${(props) => (props.isActive ? `${RED}` : '#F5F5F5')};
  border: none;
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

  @media ${device.desktop} {
    width: 100px;
    border-radius: 10px;
    margin-right: 5px;
  }
`;
