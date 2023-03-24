import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { LIGHT_GRAY } = COLORS;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  border: 1px solid ${LIGHT_GRAY};
  border-radius: 10px;
  margin-bottom: 25px;

  font-family: 'Roboto';
  font-size: 17px;

  ::placeholder {
    font-style: italic;
  }
`;
