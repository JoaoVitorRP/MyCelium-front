import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { RED } = COLORS;

export const ErrorMessage = styled.span`
  width: 100%;
  margin: -20px 0px 25px 0px;

  font-size: 15px;
  color: ${RED};
`;
