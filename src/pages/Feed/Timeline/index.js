import styled from 'styled-components';
import Post from '../../../components/Feed/Timeline/Post';
import { useEffect, useState } from 'react';
import useGetPosts from '../../../hooks/api/useGetPosts';
import Trendings from '../../../components/Feed/Timeline/Trendings';

export default function PostContainer() {
  const [posts, setPosts] = useState([]);
  const [trendings, setTrendings] = useState([]);

  const { getPosts } = useGetPosts();

  useEffect(() => {
    async function fetchData() {
      try {
        const postsAndTrendingsArray = await getPosts();

        setPosts(postsAndTrendingsArray.posts);
        setTrendings(postsAndTrendingsArray.trendings);
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

      <Trendings trendings={trendings} />
    </Main>
  );
}

const Container = styled.div`
  width: 450px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;

  position: relative;
`;
