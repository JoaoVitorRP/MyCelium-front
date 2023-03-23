import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { FONT_BLACK, WHITE, BEIGE } = COLORS;

export const FormDiv = styled.div`
  width: calc(35% - 10px);
  height: 100%;
  padding: 5%;
  background-color: ${WHITE};
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    margin: 70px 0px 40px 0px;

    font-size: 35px;
    font-weight: 700;
    color: ${FONT_BLACK};
    text-align: left;
  }
`;

export const Screen = styled.main`
  width: 100%;
  height: 100vh;
  padding: 10px;
  background-color: ${BEIGE};

  display: flex;
`;
