import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Form/Button';
import { StyledForm } from '../Form/Form';
import { Input } from '../Form/Input';
import { Label } from '../Form/Label';
import { IconContext } from 'react-icons';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { COLORS } from '../../services/Constants/colors';
const { RED } = COLORS;

export default function SignUpFormPage2({ userData, handleInputChange, setPageNumber }) {
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (confirmedPassword !== userData.password) {
      return setError(true);
    }

    setPageNumber(3);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="password">Senha:</Label>
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Insira sua senha"
        value={userData.password}
        onChange={handleInputChange}
        required
      />

      <Label htmlFor="passwordConfirm">Confirmar Senha:</Label>
      <Input
        type="password"
        id="passwordConfirm"
        placeholder="Confirme sua senha"
        onChange={(e) => setConfirmedPassword(e.target.value)}
        required
      />
      {error && <ErrorMessage>As senhas devem ser iguais!</ErrorMessage>}

      <Buttons>
        <ButtonDiv>
          <Button onClick={() => setPageNumber(1)} disabled={false}>
            <IconContext.Provider value={{ className: 'react-icons-back' }}>
              <MdOutlineKeyboardArrowLeft />
            </IconContext.Provider>
            Anterior
          </Button>
        </ButtonDiv>

        <ButtonDiv>
          <Button type="submit" disabled={false}>
            Próximo
            <IconContext.Provider value={{ className: 'react-icons-forward' }}>
              <MdOutlineKeyboardArrowRight />
            </IconContext.Provider>
          </Button>
        </ButtonDiv>
      </Buttons>
    </StyledForm>
  );
}

const ErrorMessage = styled.span`
  width: 100%;
  margin: -20px 0px 25px 0px;

  font-size: 15px;
  color: ${RED};
`;

const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  width: 49%;
`;
