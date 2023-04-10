import styled from 'styled-components';
import { MdCheckBox } from 'react-icons/md';
import { COLORS } from '../../services/Constants/colors';
import { IconContext } from 'react-icons';
const { FONT_BLACK, LIGHT_GRAY, RED } = COLORS;

export default function CheckboxInput({ label, id, name, isSelected, handleCheckboxChange }) {
  return (
    <Label isSelected={isSelected}>
      <Input type="radio" id={id} name={name} value={id} onChange={handleCheckboxChange} />
      <IconContext.Provider value={{ className: 'check-icon' }}>
        <MdCheckBox />
      </IconContext.Provider>
      <span>{label}</span>
    </Label>
  );
}

const Label = styled.label`
  padding: 10px;
  border: ${(props) => (props.isSelected ? `2px solid ${RED}` : `1px solid ${LIGHT_GRAY}`)};
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: ${(props) => (props.isSelected ? `700` : `400`)};
  line-height: 23px;
  color: ${FONT_BLACK};

  .check-icon {
    min-width: 30px;
    margin-right: 10px;

    font-size: 30px;
    color: ${(props) => (props.isSelected ? `${RED}` : `${LIGHT_GRAY}`)};
  }
`;

const Input = styled.input`
  background-color: transparent;
  margin: 0;
  cursor: pointer;

  -webkit-appearance: none;
  appearance: none;
`;
