import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { FONT_BLACK } = COLORS;

export const Label = styled.label`
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
  color: ${FONT_BLACK};
`;
