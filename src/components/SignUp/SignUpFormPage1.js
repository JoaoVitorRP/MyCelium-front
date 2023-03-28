import { IconContext } from 'react-icons';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';
import { Button } from '../Form/Button';
import { StyledForm } from '../Form/Form';
import { Input } from '../Form/Input';
import { Label } from '../Form/Label';
import { COLORS } from '../../services/Constants/colors';
import useValidateUser from '../../hooks/api/useValidateUser';
const { FONT_BLACK } = COLORS;

export default function SignUpFormPage1({ userData, handleInputChange, setPageNumber }) {
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
      if (err.response.data.message === 'Invalid email') return console.log('email');
      if (err.response.data.message === 'Invalid user') return console.log('user');
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
        required
      />

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
          required
        />
      </UserInputContainer>

      <Label htmlFor="name">Nome:</Label>
      <Input
        id="name"
        name="name"
        placeholder="Nome de usuário"
        minLength={3}
        maxLength={30}
        value={userData.name}
        onChange={handleInputChange}
        required
      />

      <Button type="submit" disabled={false}>
        {validateUserLoading ? (
          'Loading...'
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
