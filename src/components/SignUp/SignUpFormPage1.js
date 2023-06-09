import { IconContext } from 'react-icons';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';
import { Button } from '../Form/Button';
import { StyledForm } from '../Form/Form';
import { Input } from '../Form/Input';
import { Label } from '../Form/Label';
import { COLORS } from '../../services/Constants/colors';
import useValidateUser from '../../hooks/api/useValidateUser';
import LoadingDots from '../Form/Loading';
import { ErrorMessage } from '../Form/ErrorMessage';
const { FONT_BLACK } = COLORS;

export default function SignUpFormPage1({ error, setError, userData, handleInputChange, setPageNumber }) {
  const { validateUserLoading, validateUser } = useValidateUser();

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      user: userData.user,
      email: userData.email,
    };

    try {
      await validateUser(body);

      setPageNumber(2);
    } catch (err) {
      if (err.response.status === 409) return setError(err.response.data.message);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="email@email.com"
        value={userData.email}
        onChange={handleInputChange}
        disabled={validateUserLoading}
        error={error === 'Invalid email'}
        required
      />
      {error === 'Invalid email' && <ErrorMessage>Esse email já está cadastrado</ErrorMessage>}

      <Label htmlFor="user">Usuário:</Label>
      <UserInputContainer>
        @
        <Input
          id="user"
          name="user"
          placeholder="user.exemplo"
          minLength={3}
          maxLength={16}
          value={userData.user}
          onChange={handleInputChange}
          disabled={validateUserLoading}
          error={error === 'Invalid user'}
          required
        />
      </UserInputContainer>
      {error === 'Invalid user' && <ErrorMessage>Esse usuário já existe</ErrorMessage>}

      <Label htmlFor="name">Nome:</Label>
      <Input
        id="name"
        name="name"
        placeholder="Nome de usuário"
        minLength={3}
        maxLength={30}
        value={userData.name}
        onChange={handleInputChange}
        disabled={validateUserLoading}
        required
      />

      <Button type="submit" disabled={validateUserLoading}>
        {validateUserLoading ? (
          <LoadingDots />
        ) : (
          <>
            Próximo
            <IconContext.Provider value={{ className: 'react-icons-forward' }}>
              <MdOutlineKeyboardArrowRight />
            </IconContext.Provider>
          </>
        )}
      </Button>
    </StyledForm>
  );
}

const UserInputContainer = styled.div`
  margin-bottom: 25px;

  display: flex;
  align-items: center;

  font-size: 25px;
  font-weight: 700;
  color: ${FONT_BLACK};

  input {
    margin-left: 5px;
    margin-bottom: 0px;
  }
`;
