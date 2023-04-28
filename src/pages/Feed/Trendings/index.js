import styled from 'styled-components';
import { MdTrendingUp } from 'react-icons/md';
import useGetTrendings from '../../../hooks/api/useGetTrendings';
import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../services/Constants/colors';
const { FONT_BLACK, LIGHT_GRAY, WHITE } = COLORS;

export default function Trendings() {
  const [trendings, setTrendings] = useState([]);

  const { getTrendings } = useGetTrendings();

  useEffect(() => {
    async function fetchData() {
      try {
        const trendingsArray = await getTrendings(15);

        setTrendings(trendingsArray);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Title>
        <h1>Em alta</h1>
        <MdTrendingUp />
      </Title>

      <TrendingList>
        {trendings.map((trending, index) => {
          return (
            <Fragment key={index}>
              <LineDiv />

              <li>
                <Link to={`/feed/trendings/${trending.species}`}>
                  <TrendingData>{index + 1} · Fungo em alta</TrendingData>

                  <span>{trending.species}</span>

                  <TrendingData>
                    {trending._count.species} {trending._count.species === 1 ? 'post' : 'posts'}
                  </TrendingData>
                </Link>
              </li>
            </Fragment>
          );
        })}
      </TrendingList>
    </Container>
  );
}

const Container = styled.div`
  width: 750px;
  padding: 30px;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  font-family: 'Roboto';
  color: ${FONT_BLACK};
`;

const Title = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 30px;

  h1 {
    font-weight: 700;
    font-size: 25px;
  }
`;

const LineDiv = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0 25px 0;
  background-color: ${LIGHT_GRAY};
`;

const TrendingList = styled.ul`
  font-size: 20px;
  line-height: 23px;

  li {
    margin: -10px 0;
    cursor: pointer;

    font-weight: 700;
    text-decoration: none;
    color: inherit;

    a {
      display: flex;
      flex-direction: column;

      text-decoration: none;
      color: inherit;
    }

    :hover {
      span {
        text-decoration: underline;
      }
    }
  }

  span {
    margin-bottom: 5px;

    font-style: italic;
  }
`;

const TrendingData = styled.div`
  margin-bottom: 5px;

  font-weight: 400;
  font-size: 15px;
`;
