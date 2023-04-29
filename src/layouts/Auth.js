import ImageContainer from '../components/Auth/ImageContainer';
import { FormDiv } from '../components/Auth/FormDiv';
import { Screen } from '../components/Screen';
import Logo from '../components/Logo';

export default function Auth({ children }) {
  return (
    <Screen>
      <FormDiv>
        <Logo height={70} fontSize={3.5} />
        {children}
      </FormDiv>
      <ImageContainer />
    </Screen>
  );
}
