import styled, { css, keyframes } from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { WHITE, RED } = COLORS;

export const InputContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 25px;
  border: ${(props) => (props.error ? `2px solid ${RED}` : '')};

  animation: ${(props) =>
    props.error
      ? css`
          ${shakeAnimation} 0.2s ease-in-out 0s 2
        `
      : ''};

  display: flex;
  flex-direction: column;
`;

const shakeAnimation = keyframes`
  0% { margin-left: 0rem; }
  25% { margin-left: 0.5rem; }
  75% { margin-left: -0.5rem; }
  100% { margin-left: 0rem; }
`;
