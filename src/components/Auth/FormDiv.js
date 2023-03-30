import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { FONT_BLACK, WHITE } = COLORS;

export const FormDiv = styled.div`
  width: calc(35% - 10px);
  padding: 5%;
  background-color: ${WHITE};
  border-radius: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

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
