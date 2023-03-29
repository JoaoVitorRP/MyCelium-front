import { Outlet } from 'react-router-dom';
import Header from '../components/Feed/Header';
import { Screen } from '../components/Screen';

export default function Feed() {
  return (
    <Screen>
      <Header />
      <Outlet />
    </Screen>
  );
}
