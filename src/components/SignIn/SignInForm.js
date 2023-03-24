import styled from 'styled-components';
import { Button } from '../Form/Button';
import { StyledForm } from '../Form/Form';
import { Input } from '../Form/Input';
import { Label } from '../Form/Label';

export default function SignInForm() {
  return (
    <StyledForm>
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="Insira seu email" required />

      <Label htmlFor="password">Senha</Label>
      <Input type="password" id="password" placeholder="Insira sua senha" required />

      <StyledButton type="submit" disabled={false}>
        Entrar
      </StyledButton>
    </StyledForm>
  );
}

const StyledButton = styled(Button)`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;
