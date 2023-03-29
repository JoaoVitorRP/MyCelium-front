import styled from 'styled-components';
import { MdOutlineLogout } from 'react-icons/md';
import { COLORS } from '../../services/Constants/colors';
import { useNavigate } from 'react-router-dom';
const { WHITE, RED } = COLORS;

export default function DropdownMenu({ setDropdownActive, dropdownActive }) {
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('myceliumUserData');

    navigate('/');
  }

  return (
    <BoxContainer onClick={() => setDropdownActive(!dropdownActive)}>
      <DropdownBox dropdownActive={dropdownActive} onClick={logOut}>
        <ul>
          <LogOut>
            <span>Sair</span>
            <MdOutlineLogout />
          </LogOut>
        </ul>
      </DropdownBox>
    </BoxContainer>
  );
}

const BoxContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  right: -1.1rem;
  top: 3.5rem;
  z-index: 3;
`;

const DropdownBox = styled.div`
  width: 8rem;
  height: 3rem;
  background-color: ${WHITE};
  border-radius: 10px;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
  cursor: pointer;

  font-weight: 700;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;

  ::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    right: 1.6em;
    border: 0.75rem solid transparent;
    border-top: none;

    border-bottom-color: ${WHITE};
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }

  ul {
    width: 100%;

    line-height: 25px;
    text-align: center;
  }
`;

const LogOut = styled.li`
  width: 100%;
  padding: 0 2rem;
  background-color: ${WHITE};

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-right: 10px;
  }

  :hover {
    background-color: ${RED};

    color: ${WHITE};
  }
`;
