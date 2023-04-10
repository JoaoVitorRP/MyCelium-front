import styled from 'styled-components';
import LandingForm from '../../../components/Feed/CreatePost/LandingForm';
import { useState } from 'react';
import PageTwoForm from '../../../components/Feed/CreatePost/PageTwoForm';

export default function CreatePost() {
  const [page, setPage] = useState(2);

  return (
    <FormContainer>
      {page === 1 && <LandingForm setPage={setPage} />}
      {page === 2 && <PageTwoForm />}
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 700px;

  font-family: 'Roboto';
`;
