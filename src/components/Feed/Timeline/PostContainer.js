import styled from 'styled-components';
import Post from './Post';
import { useEffect, useState } from 'react';
import useGetPosts from '../../../hooks/api/useGetPosts';

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
  }, []);

  return (
    <Container>
      {posts.map((post, index) => {
        return <Post postData={post} key={index} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
