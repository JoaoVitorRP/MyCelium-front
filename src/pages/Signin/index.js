import { Link } from 'react-router-dom';
import { ScreenRedirect } from '../../components/Auth/ScreenRedirect';
import Form from '../../components/SignIn/Form';
import Auth from '../../layouts/Auth';

export default function Signin() {
  return (
    <Auth>
      <h1>Fazer login:</h1>
      <Form />
      <ScreenRedirect>
        Ainda não possui uma conta? <Link to="/signup">Cadastre-se!</Link>
      </ScreenRedirect>
    </Auth>
  );
}
