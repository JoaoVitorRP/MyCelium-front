import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
import { device } from '../../services/Constants/breakpoints';
const { FONT_BLACK, WHITE } = COLORS;

export const FormDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10%;
  background-color: ${WHITE};
  margin: -20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    margin: 40px 0px 30px 0px;

    font-size: 35px;
    font-weight: 700;
    color: ${FONT_BLACK};
    text-align: left;
  }

  @media ${device.tablet} {
    width: 100%;
    height: auto;
    border-radius: 50px;
    margin: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media ${device.desktop} {
    width: calc(35% - 10px);
    padding: 5%;
  }
`;
