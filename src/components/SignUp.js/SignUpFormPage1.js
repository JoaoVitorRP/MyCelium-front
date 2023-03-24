import { Button } from '../Form/Button';
import { StyledForm } from '../Form/Form';
import { Input } from '../Form/Input';
import { Label } from '../Form/Label';

export default function SignUpFormPage1({ userData, handleInputChange, setPageNumber }) {
  return (
    <StyledForm onSubmit={() => setPageNumber(2)}>
      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="email@email.com"
        value={userData.email}
        onChange={handleInputChange}
        required
      />

      <Label htmlFor="name">Nome:</Label>
      <Input
        id="name"
        name="name"
        placeholder="Insira seu nome de usuário"
        value={userData.name}
        onChange={handleInputChange}
        required
      />

      <Button type="submit" disabled={false}>
        Próximo
      </Button>
    </StyledForm>
  );
}
