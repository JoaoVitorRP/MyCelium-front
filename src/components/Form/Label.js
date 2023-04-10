import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { FONT_BLACK } = COLORS;

export const Label = styled.label`
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: ${FONT_BLACK};

  i {
    font-style: italic;
    font-weight: 400;
  }
`;
