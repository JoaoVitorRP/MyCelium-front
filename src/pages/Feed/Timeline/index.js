import styled from 'styled-components';
import PostContainer from '../../../components/Feed/Timeline/PostContainer';

export default function Timeline() {
  return (
    <Main>
      <PostContainer />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;
