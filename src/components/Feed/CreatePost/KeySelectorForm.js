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
        <Label>Selecione a característica morfológica de maior evidência nos corpos frutíferos de seu fungo:</Label>
        <CheckboxInput
          label="A. Formato de chapéu com lamelas na face inferior e geralmente com estípite."
          id="A"
          name="fruitbody"
          isSelected={selectedKey === 'A'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="B. Estipitados com cabeça ou chapéu, sem lamelas na face inferior."
          id="B"
          name="fruitbody"
          isSelected={selectedKey === 'B'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="C. Em forma de calíce, tigela, funil, leque a petalóides ou espatulados."
          id="C"
          name="fruitbody"
          isSelected={selectedKey === 'C'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="D. Mais ou menos claviformes, cilíndricos, ramificados ou não."
          id="D"
          name="fruitbody"
          isSelected={selectedKey === 'D'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="E. Formando crosta sobre a madeira, semi-aderidos ao substrato, irregularmente lobados, foliáceos ou cerebriformes."
          id="E"
          name="fruitbody"
          isSelected={selectedKey === 'E'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CheckboxInput
          label="F. Dispostos em prateleiras, com ou sem estípite lateral, achatados, conchados ou auriculados."
          id="F"
          name="fruitbody"
          isSelected={selectedKey === 'F'}
          handleCheckboxChange={handleCheckboxChange}
        />
      </InputContainer>
    </StyledForm>
  );
}
