import styled from 'styled-components';
import Logo from '../Logo';
import { useNavigate } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import SwapPagesButtons from './SwapPagesButtons';
import { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { COLORS } from '../../services/Constants/colors';
import DropdownMenu from './DropdownMenu';
const { FONT_BLACK, FONT_GRAY, WHITE } = COLORS;

export default function Header() {
  const [dropdownActive, setDropdownActive] = useState(false);

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

        <IconContext.Provider
          value={{ className: `${dropdownActive ? 'dropdown-arrow-active' : 'dropdown-arrow-disabled'}` }}
        >
          <MdKeyboardArrowDown onClick={() => setDropdownActive(!dropdownActive)} />
        </IconContext.Provider>

        {dropdownActive && <DropdownMenu setDropdownActive={setDropdownActive} dropdownActive={dropdownActive} />}
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

  position: relative;

  b {
    font-weight: 700;
  }

  p {
    color: ${FONT_GRAY};
  }

  .dropdown-arrow-active {
    cursor: pointer;

    font-size: 40px;

    transform: rotate(180deg);
    transition: transform 0.2s linear;
  }

  .dropdown-arrow-disabled {
    cursor: pointer;

    font-size: 40px;

    transform: rotate(0deg);
    transition: transform 0.2s linear;
  }
`;

const UserAndName = styled.div`
  margin-right: 15px;

  display: flex;
  flex-direction: column;
`;
