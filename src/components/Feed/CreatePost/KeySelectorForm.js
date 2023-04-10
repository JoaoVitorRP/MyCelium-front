import { StyledForm } from '../../Form/Form';
import { InputContainer } from '../../Form/InputContainer';
import { Label } from '../../Form/Label';
import CheckboxInput from '../../Form/CheckboxInput';

export default function KeySelectorForm({ selectedKey, setSelectedKey }) {
  function handleCheckboxChange(e) {
    const { value } = e.target;

    setSelectedKey(value);
  }

  return (
    <StyledForm>
      <InputContainer>
        <Label>Selecione a característica morfológica de maior evidência no corpo frutífero de seu fungo:</Label>
        <CheckboxInput
          label="Formato de chapéu com lamelas na face inferior e geralmente com estípite."
          id="A"
          name="fruitbody"
          isSelected={selectedKey === 'A'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="Estipitado com cabeça ou chapéu, sem lamelas na face inferior."
          id="B"
          name="fruitbody"
          isSelected={selectedKey === 'B'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="Em forma de calíce, tigela, funil, petalóide ou espatulado."
          id="C"
          name="fruitbody"
          isSelected={selectedKey === 'C'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="Globoso, tuberoso, piriforme, turbinado ou estrelar."
          id="D"
          name="fruitbody"
          isSelected={selectedKey === 'D'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="Mais ou menos claviforme, cilíndrico, ramificado ou não."
          id="E"
          name="fruitbody"
          isSelected={selectedKey === 'E'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="Em forma de leque, disposto em prateleiras, 
            com ou sem estípite lateral ou irregularmente lobado, 
            foliáceo, auriculado, conchado, cerebriforme ou formando crostas sabre a madeira."
          id="F"
          name="fruitbody"
          isSelected={selectedKey === 'F'}
          handleCheckboxChange={handleCheckboxChange}
        />
      </InputContainer>
    </StyledForm>
  );
}
