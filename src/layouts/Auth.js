import ImageContainer from '../components/Auth/ImageContainer';
import { FormDiv, Screen } from '../components/Auth';
import Logo from '../components/Logo';

export default function Auth({ children }) {
  return (
    <Screen>
      <FormDiv>
        <Logo height={100} fontSize={4} />
        {children}
      </FormDiv>
      <ImageContainer />
    </Screen>
  );
}
