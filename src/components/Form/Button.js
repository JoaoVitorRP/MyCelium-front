import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { WHITE, RED } = COLORS;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${RED};
  border: none;
  border-radius: 50px;
  cursor: pointer;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 17px;
  color: ${WHITE};
`;
