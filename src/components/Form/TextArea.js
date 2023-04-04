import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { LIGHT_GRAY } = COLORS;

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${LIGHT_GRAY};
  resize: none;

  font-family: 'Roboto';
  font-size: 16px;

  ::placeholder {
    font-style: italic;
    color: ${LIGHT_GRAY};
  }
`;
