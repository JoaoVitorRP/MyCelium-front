import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { MdTrendingUp, MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { NavigationButton } from './NavigationButton';

export default function NavigationButtons() {
  function comparePathname(path) {
    return window.location.pathname === path;
  }

  return (
    <ButtonsContainer>
      <Link to="/feed/timeline">
        <NavigationButton isActive={comparePathname('/feed/timeline')}>
          <IconContext.Provider value={{ size: '20px' }}>
            <AiFillHome />
          </IconContext.Provider>
          Home
        </NavigationButton>
      </Link>

      <Link to="/feed/trendings">
        <NavigationButton isActive={comparePathname('/feed/trendings')}>
          <IconContext.Provider value={{ size: '20px' }}>
            <MdTrendingUp />
          </IconContext.Provider>
          Em alta
        </NavigationButton>
      </Link>

      <Link to="/feed/create-post">
        <NavigationButton isActive={comparePathname('/feed/create-post')}>
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
