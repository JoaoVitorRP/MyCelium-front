import Header from '../components/Feed/Header';
import { Screen } from '../components/Screen';

export default function Feed({ children }) {
  return (
    <Screen>
      <Header />
      {children}
    </Screen>
  );
}
