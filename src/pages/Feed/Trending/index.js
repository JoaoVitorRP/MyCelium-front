import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Post from '../../../components/Feed/Post';
import useGetPostsBySpecies from '../../../hooks/api/useGetPostsBySpecies';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { COLORS } from '../../../services/Constants/colors';
const { RED } = COLORS;

export default function Trending() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  const { getPostsBySpecies } = useGetPostsBySpecies();

  useEffect(() => {
    async function fetchData() {
      try {
        const postsArray = await getPostsBySpecies(params.species);

        setPosts(postsArray);
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Não foram encontrados posts para esse fungo!',
          confirmButtonText: 'Voltar para a seção "em alta"',
          confirmButtonColor: `${RED}`,
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/feed/trendings');
          }
        });
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
