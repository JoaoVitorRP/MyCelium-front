import styled from 'styled-components';
import Post from './Post'

export default function PostContainer() {
  return (
    <Container>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </Container>
  );
}

const Container = styled.div`
  width: 35%;

  display: flex;
  flex-direction: column;
`;
