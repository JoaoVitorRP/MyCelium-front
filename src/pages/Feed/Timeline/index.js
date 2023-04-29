import styled from 'styled-components';
import Post from '../../../components/Feed/Post';
import { useEffect, useState } from 'react';
import useGetPosts from '../../../hooks/api/useGetPosts';
import TrendingsSidebar from '../../../components/Feed/TrendingsSidebar';
import { device } from '../../../services/Constants/breakpoints';

export default function PostContainer() {
  const [posts, setPosts] = useState([]);

  const { getPosts } = useGetPosts();

  useEffect(() => {
    async function fetchData() {
      try {
        const postsArray = await getPosts();

        setPosts(postsArray);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <Main>
      <Container>
        {posts.map((post, index) => {
          return <Post postData={post} key={index} />;
        })}
      </Container>

      <TrendingsSidebar />
    </Main>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 450px;
  }
`;

const Main = styled.main`
  display: flex;

  position: relative;
`;
