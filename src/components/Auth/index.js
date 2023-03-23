import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { WHITE, BEIGE } = COLORS;

export const FormDiv = styled.div`
  width: calc(35% - 10px);
  height: 100%;
  background-color: ${WHITE};
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Screen = styled.main`
  width: 100%;
  height: 100vh;
  padding: 10px;
  background-color: ${BEIGE};

  display: flex;
`;
