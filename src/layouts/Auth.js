import ImageContainer from '../components/Auth/ImageContainer';
import { FormDiv } from '../components/Auth/FormDiv';
import { Screen } from '../components/Screen';
import Logo from '../components/Logo';

export default function Auth({ children }) {
  return (
    <Screen>
      <FormDiv>
        <Logo height={80} fontSize={4} />
        {children}
      </FormDiv>
      <ImageContainer />
    </Screen>
  );
}
