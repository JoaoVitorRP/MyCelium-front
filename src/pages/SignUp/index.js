import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScreenRedirect } from '../../components/Auth/ScreenRedirect';
import SignUpFormPage1 from '../../components/SignUp.js/SignUpFormPage1';
import SignUpFormPage2 from '../../components/SignUp.js/SignUpFormPage2';
import SignUpFormPage3 from '../../components/SignUp.js/SignUpFormPage3';
import Auth from '../../layouts/Auth';

export default function SignUp() {
  const [pageNumber, setPageNumber] = useState(1);
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <Auth>
      <h1>Cadastrar ({pageNumber}/3):</h1>

      {pageNumber === 1 ? (
        <SignUpFormPage1 userData={userData} handleInputChange={handleInputChange} setPageNumber={setPageNumber} />
      ) : pageNumber === 2 ? (
        <SignUpFormPage2 userData={userData} handleInputChange={handleInputChange} setPageNumber={setPageNumber} />
      ) : pageNumber === 3 ? (
        <SignUpFormPage3 userData={userData} setPageNumber={setPageNumber} />
      ) : (
        <></>
      )}

      <ScreenRedirect>
        Já possui uma conta? <Link to="/">Faça login!</Link>
      </ScreenRedirect>
    </Auth>
  );
}
