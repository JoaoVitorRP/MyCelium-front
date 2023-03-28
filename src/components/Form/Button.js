import styled from 'styled-components';
import { COLORS } from '../../services/Constants/colors';
const { WHITE, RED } = COLORS;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${RED};
  opacity: ${(props) => (props.disabled ? '0.85' : '1')};
  border: none;
  border-radius: 50px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 17px;
  color: ${WHITE};

  .react-icons-back {
    font-size: 35px;

    position: absolute;
    left: 2px;
  }

  .react-icons-forward {
    font-size: 35px;

    position: absolute;
    right: 2px;
  }
`;
