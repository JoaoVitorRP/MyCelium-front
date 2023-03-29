import styled from 'styled-components';
import Logo from '../Logo';
import { useNavigate } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import SwapPagesButtons from './SwapPagesButtons';
import { COLORS } from '../../services/Constants/colors';
import { useContext } from 'react';
import UserContext from '../../contexts/userContext';
const { FONT_BLACK, FONT_GRAY, WHITE } = COLORS;

export default function Header() {
  const navigate = useNavigate();

  const { userData } = useContext(UserContext);
  const { user } = userData;

  return (
    <HeaderContainer>
      <Logo height="45" fontSize="2.5" onClick={() => navigate('/feed/timeline')} />

      <SwapPagesButtons />

      <UserData>
        <UserAndName>
          <b>{user.name}</b>
          <p>@{user.user}</p>
        </UserAndName>

        <ProfilePicture pictureUrl={user.picture} />
      </UserData>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: calc(100% - 40px);
  height: 85px;
  padding: 12px 25px;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 20px;
  left: 20px;
`;

const UserData = styled.div`
  height: 45px;

  display: flex;
  align-items: center;

  font-family: 'Roboto';
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${FONT_BLACK};
  text-align: right;

  b {
    font-weight: 700;
  }

  p {
    color: ${FONT_GRAY};
  }
`;

const UserAndName = styled.div`
  margin-right: 15px;

  display: flex;
  flex-direction: column;
`;
