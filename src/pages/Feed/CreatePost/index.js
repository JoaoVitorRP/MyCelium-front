import styled from 'styled-components';
import LandingForm from '../../../components/Feed/CreatePost/LandingForm';

export default function CreatePost() {
  return (
    <FormContainer>
      <LandingForm />
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 700px;

  font-family: 'Roboto';
`;
