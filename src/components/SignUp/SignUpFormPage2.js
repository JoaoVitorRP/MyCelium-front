import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Form/Button';
import { StyledForm } from '../Form/Form';
import { Input } from '../Form/Input';
import { Label } from '../Form/Label';
import { IconContext } from 'react-icons';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { ErrorMessage } from '../Form/ErrorMessage';

export default function SignUpFormPage2({ userData, handleInputChange, setPageNumber }) {
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (userData.confirmPassword !== userData.password) {
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
        minLength={6}
        value={userData.password}
        onChange={handleInputChange}
        required
      />

      <Label htmlFor="confirmPassword">Confirmar Senha:</Label>
      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirme sua senha"
        value={userData.confirmPassword}
        onChange={handleInputChange}
        error={error}
        required
      />
      {error && <ErrorMessage>As senhas devem ser iguais!</ErrorMessage>}

      <Buttons>
        <ButtonDiv>
          <Button type="button" onClick={() => setPageNumber(1)} disabled={false}>
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

const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  width: 49%;
`;
