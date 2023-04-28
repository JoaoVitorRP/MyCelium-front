import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';
import { useState } from 'react';
import { COLORS } from '../../services/Constants/colors';
const { FONT_BLACK, FONT_GRAY, LIGHT_GRAY, WHITE, RED } = COLORS;

export default function Post({ postData }) {
  const { description, image, species, users } = postData;
  const { user, name, picture } = users;

  const [showFullText, setShowFullText] = useState(false);

  let clampedDescription;
  if (description.length > 185) {
    clampedDescription = `${description.slice(0, 186)}...`;
  }

  return (
    <Container showFullText={showFullText}>
      <PostHeader>
        <ProfilePicture pictureUrl={picture} />

        <UserAndName>
          <b>{name}</b>
          <p>@{user}</p>
        </UserAndName>
      </PostHeader>

      <DescriptionContainer>
        {clampedDescription && !showFullText ? (
          <>
            {clampedDescription} <SeeMore onClick={() => setShowFullText(true)}>ver mais</SeeMore>
          </>
        ) : clampedDescription && showFullText ? (
          <>
            {description} <SeeMore onClick={() => setShowFullText(false)}>ver menos</SeeMore>
          </>
        ) : (
          description
        )}
      </DescriptionContainer>

      <ImageContainer>
        <img src={image} alt="Post" />
      </ImageContainer>
      <SpeciesContainer>{species}</SpeciesContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  padding: 2.2vh;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 4.5vh;

  font-family: 'Roboto';
  font-size: 2vh;
  line-height: 2.1vh;
  color: ${FONT_BLACK};
`;

const PostHeader = styled.header`
  height: 6.3vh;
  margin-bottom: 2.1vh;

  display: flex;
  align-items: center;
`;

const UserAndName = styled.div`
  margin-left: 1.3vh;

  line-height: 2.2vh;

  display: flex;
  flex-direction: column;

  b {
    font-size: 2vh;
    font-weight: 700;
  }

  p {
    font-size: 1.7vh;
    color: ${FONT_GRAY};
  }
`;

const DescriptionContainer = styled.div`
  white-space: pre-line;
`;

const SeeMore = styled.span`
  cursor: pointer;

  font-weight: 700;
  text-decoration: underline;
  color: ${RED};
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: ${LIGHT_GRAY};
  border-radius: 10px;
  margin-top: 2vh;

  overflow: hidden;

  display: flex;
  justify-content: center;

  position: relative;

  img {
    max-width: 100%;
    max-height: 50vh;
    min-height: 30vh;
  }
`;

const SpeciesContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px;
  background-color: ${RED};
  margin-top: -30px;
  border-radius: 10px;

  display: flex;
  align-items: flex-end;

  z-index: 1;

  font-weight: 700;
  font-style: italic;
  color: ${WHITE};
`;
