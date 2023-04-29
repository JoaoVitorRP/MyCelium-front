import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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

      <Link to={`/feed/trendings/${species}`}>
        <SpeciesContainer>{species}</SpeciesContainer>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  max-width: 450px;
  height: 100%;
  padding: 21px;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 32px;

  font-family: 'Roboto';
  font-size: 16px;
  line-height: 18px;
  color: ${FONT_BLACK};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const PostHeader = styled.header`
  height: 45px;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
`;

const UserAndName = styled.div`
  margin-left: 10px;

  line-height: 18px;

  display: flex;
  flex-direction: column;

  b {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
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
  margin-top: 14px;

  overflow: hidden;

  display: flex;
  justify-content: center;

  position: relative;

  img {
    max-width: 100%;
    max-height: 360px;
    min-height: 216px;
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

  :hover {
    cursor: pointer;

    text-decoration: underline;
  }
`;
