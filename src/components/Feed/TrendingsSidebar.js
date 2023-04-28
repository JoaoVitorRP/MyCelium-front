import styled from 'styled-components';
import { MdTrendingUp } from 'react-icons/md';
import { COLORS } from '../../services/Constants/colors';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import useGetTrendings from '../../hooks/api/useGetTrendings';
const { FONT_BLACK, LIGHT_GRAY, WHITE } = COLORS;

export default function TrendingsSidebar() {
  const [trendings, setTrendings] = useState([]);

  const { getTrendings } = useGetTrendings();

  useEffect(() => {
    async function fetchData() {
      try {
        const trendingsArray = await getTrendings(7);

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

      <LineDiv />

      <TrendingList>
        {trendings.map((trending, index) => {
          return (
            <li key={index}>
              <Link to={`/feed/trendings/${trending.species}`}>
                🍄 <span>{trending.species}</span>
              </Link>
            </li>
          );
        })}
      </TrendingList>
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
  height: fit-content;
  padding: 15px 15px 10px 15px;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-left: 25px;

  display: flex;
  flex-direction: column;

  position: sticky;
  top: 140px;
  right: 0px;

  font-family: 'Roboto';
  color: ${FONT_BLACK};
`;

const Title = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 25px;

  h1 {
    font-weight: 700;
    font-size: 20px;
  }
`;

const LineDiv = styled.div`
  width: 100%;
  height: 1px;
  margin: 10px 0 15px 0;
  background-color: ${LIGHT_GRAY};
`;

const TrendingList = styled.ul`
  font-size: 18px;
  line-height: 20px;

  li {
    margin-bottom: 10px;
    cursor: pointer;

    text-decoration: none;
    color: inherit;

    a {
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
    font-style: italic;
  }
`;
