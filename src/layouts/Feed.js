import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Feed/Header';
import { Screen } from '../components/Screen';

export default function Feed() {
  return (
    <StyledScreen>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledScreen>
  );
}

const StyledScreen = styled(Screen)`
  padding-top: 140px;
  padding-bottom: 100px;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;
