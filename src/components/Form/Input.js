import styled, { css, keyframes } from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { LIGHT_GRAY, RED } = COLORS;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  border: ${(props) => (props.error ? `2px solid ${RED}` : `1px solid ${LIGHT_GRAY}`)};
  border-radius: 10px;
  margin-bottom: 25px;

  font-family: 'Roboto';
  font-size: 17px;

  ::placeholder {
    font-style: italic;
  }

  animation: ${(props) => (props.error ? css`${shakeAnimation} 0.2s ease-in-out 0s 2` : '')};
`;

const shakeAnimation = keyframes`
  0% { margin-left: 0rem; }
  25% { margin-left: 0.5rem; }
  75% { margin-left: -0.5rem; }
  100% { margin-left: 0rem; }
`;
