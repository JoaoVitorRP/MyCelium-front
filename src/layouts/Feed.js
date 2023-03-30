import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Feed/Header';
import { Screen } from '../components/Screen';

export default function Feed() {
  return (
    <StyledScreen>
      <Header />
      <Outlet />
    </StyledScreen>
  );
}

const StyledScreen = styled(Screen)`
  padding-top: 140px;
`;
