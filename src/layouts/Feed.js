import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Feed/Header';
import { Screen } from '../components/Screen';
import { device } from '../services/Constants/breakpoints';

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
  padding: 140px 0 100px 0;

  @media ${device.desktop} {
    padding: 140px 20px 32px 20px;
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;
