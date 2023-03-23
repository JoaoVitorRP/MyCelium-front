import { Link } from 'react-router-dom';
import { ScreenRedirect } from '../../components/Auth/ScreenRedirect';
import SignInForm from '../../components/SignIn/SignInForm';
import Auth from '../../layouts/Auth';

export default function SignIn() {
  return (
    <Auth>
      <h1>Fazer login:</h1>
      <SignInForm />
      <ScreenRedirect>
        Ainda não possui uma conta? <Link to="/sign-up">Cadastre-se!</Link>
      </ScreenRedirect>
    </Auth>
  );
}
