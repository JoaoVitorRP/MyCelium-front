import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSignIn from '../../hooks/api/useSignIn';
import { Button } from '../Form/Button';
import { ErrorMessage } from '../Form/ErrorMessage';
import { StyledForm } from '../Form/Form';
import { Input } from '../Form/Input';
import { Label } from '../Form/Label';
import LoadingDots from '../Form/Loading';

export default function SignInForm() {
  const [body, setBody] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const { signInLoading, signIn } = useSignIn();
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;

    setError(false);

    setBody({ ...body, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signIn(body);

      toast.success('Login realizado com sucesso!');

      navigate('/feed');
    } catch (err) {
      setError(true);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Insira seu email"
        value={body.email}
        onChange={handleInputChange}
        disabled={signInLoading}
        error={error}
        required
      />

      <Label htmlFor="password">Senha:</Label>
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Insira sua senha"
        value={body.password}
        onChange={handleInputChange}
        disabled={signInLoading}
        error={error}
        required
      />
      {error && <ErrorMessage>Email ou senha incorretos!</ErrorMessage>}

      <Button type="submit" disabled={signInLoading}>
        {signInLoading ? <LoadingDots /> : 'Entrar'}
      </Button>
    </StyledForm>
  );
}
