import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { FONT_BLACK, RED } = COLORS;

export const ScreenRedirect = styled.div`
  margin-top: 25px;

  font-family: 'Roboto';
  font-size: 16px;
  color: ${FONT_BLACK};
  text-align: center;

  a {
    font-weight: 700;
    line-height: 20px;
    color: ${RED};
    white-space: nowrap;
  }
`;
