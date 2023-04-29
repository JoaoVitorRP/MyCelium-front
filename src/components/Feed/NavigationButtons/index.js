import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { MdTrendingUp, MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Link, matchPath } from 'react-router-dom';
import { NavigationButton } from './NavigationButton';
import { device } from '../../../services/Constants/breakpoints';
import { COLORS } from '../../../services/Constants/colors';
const { WHITE } = COLORS;

export default function NavigationButtons() {
  const pathname = window.location.pathname;

  return (
    <ButtonsContainer>
      <Link to="/feed/timeline">
        <NavigationButton isActive={matchPath('/feed/timeline', pathname)}>
          <IconContext.Provider value={{ size: '20px' }}>
            <AiFillHome />
          </IconContext.Provider>
          Home
        </NavigationButton>
      </Link>

      <Link to="/feed/trendings">
        <NavigationButton
          isActive={matchPath('/feed/trendings', pathname) || matchPath('/feed/trendings/:species', pathname)}
        >
          <IconContext.Provider value={{ size: '20px' }}>
            <MdTrendingUp />
          </IconContext.Provider>
          Em alta
        </NavigationButton>
      </Link>

      <Link to="/feed/create-post">
        <NavigationButton isActive={matchPath('/feed/create-post', pathname)}>
          <IconContext.Provider value={{ size: '20px' }}>
            <MdOutlineAddPhotoAlternate />
          </IconContext.Provider>
          Postar
        </NavigationButton>
      </Link>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  width: 100%;
  height: 65px;
  background-color: ${WHITE};
  box-shadow: rgba(100, 100, 111, 0.2) 0px -7px 29px 0px;

  display: flex;
  justify-content: stretch;

  position: fixed;
  bottom: 0;
  left: 0;

  a {
    display: flex;
    flex-grow: 1;
  }

  @media ${device.desktop} {
    width: auto;
    height: auto;
    height: 100%;
    background-color: transparent;
    box-shadow: none;

    position: static;
  }
`;
