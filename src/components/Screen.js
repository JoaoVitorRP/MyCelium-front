import styled from 'styled-components';
import { COLORS } from '../services/Constants/colors';
const { BEIGE } = COLORS;

export const Screen = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: ${BEIGE};

  display: flex;
`;
