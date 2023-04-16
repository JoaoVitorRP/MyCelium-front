import styled from 'styled-components';
import { MdTrendingUp } from 'react-icons/md';
import { COLORS } from '../../../services/Constants/colors';
const { FONT_BLACK, LIGHT_GRAY, WHITE } = COLORS;

const TrendingSpecies = [
  {
    name: 'Hygrocybe spp.',
  },
  {
    name: 'Amanita muscaria',
  },
];

export default function Trendings() {
  return (
    <Container>
      <Title>
        <h1>Em alta</h1>
        <MdTrendingUp />
      </Title>

      <LineDiv />

      <TrendingList>
        {TrendingSpecies.map((species, index) => {
          return (
            <li key={index}>
              🍄 <span>{species.name}</span>
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
