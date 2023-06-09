import styled from 'styled-components';
import Logo from '../Logo';
import { Link, useNavigate } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import NavigationButtons from './NavigationButtons';
import { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IconContext } from 'react-icons';
import DropdownMenu from './DropdownMenu';
import { device } from '../../services/Constants/breakpoints';
import { useEffect } from 'react';
import { COLORS } from '../../services/Constants/colors';
const { FONT_BLACK, FONT_GRAY, WHITE, BEIGE } = COLORS;

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [dropdownActive, setDropdownActive] = useState(false);

  const navigate = useNavigate();

  const { userData } = useContext(UserContext);
  const { user } = userData;

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      <BeigeDiv />
      <HeaderContainer>
        <Link to="/feed/timeline">
          <Logo
            height="45"
            fontSize="2.5"
            nameHidden={screenWidth <= 1024}
            onClick={() => navigate('/feed/timeline')}
          />
        </Link>

        <NavigationButtons />

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
    </>
  );
}

const BeigeDiv = styled.div`
  width: 100vw;
  height: 40px;
  background-color: ${BEIGE};

  display: none;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  @media ${device.tablet} {
    display: inherit;
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 85px;
  padding: 12px 25px;
  background-color: ${WHITE};

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  a {
    text-decoration: none;
  }

  @media ${device.tablet} {
    width: calc(100% - 40px);
    border-radius: 20px;

    top: 20px;
    left: 20px;
  }

  @media ${device.desktop} {
    padding: 12px 25px;
  }
`;

const UserData = styled.div`
  height: 45px;
  margin-right: -15px;

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

    transform: rotate(360deg);
    transition: transform 0.15s linear;
  }

  .dropdown-arrow-disabled {
    cursor: pointer;

    font-size: 40px;

    transform: rotate(270deg);
    transition: transform 0.15s linear;
  }
`;

const UserAndName = styled.div`
  margin-right: 15px;

  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    width: auto;
  }
`;
