import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { MdTrendingUp, MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Link, matchPath } from 'react-router-dom';
import { NavigationButton } from './NavigationButton';

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
          Criar post
        </NavigationButton>
      </Link>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  height: 100%;
  background-color: transparent;

  display: flex;
  justify-content: space-between;
`;
