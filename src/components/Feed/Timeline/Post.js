import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../../contexts/userContext';
import ProfilePicture from '../ProfilePicture';
import { useState } from 'react';
import { COLORS } from '../../../services/Constants/colors';
const { FONT_BLACK, FONT_GRAY, LIGHT_GRAY, WHITE, RED } = COLORS;

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada odio ut massa ornare, a imperdiet elit condimentum. Nam sed luctus metus. Aliquam gravida mauris ut consequat feugiat. Phasellus vel nulla at metus semper finibus scelerisque eget metus. Nam in tortor nulla. Donec pretium metus ex, ut congue velit pharetra quis. Phasellus rhoncus risus eu mauris rhoncus, ac maximus nulla interdum. Vivamus auctor vitae arcu quis posuere. Suspendisse potenti. Donec eget volutpat sem, vel lacinia risus.';

export default function Post() {
  const [showFullText, setShowFullText] = useState(false);

  const { userData } = useContext(UserContext);
  const { user } = userData;

  let clampedDescription;
  if (description.length >= 200) {
    clampedDescription = `${description.slice(0, 186)}...`;
  }

  return (
    <Container showFullText={showFullText}>
      <PostHeader>
        <ProfilePicture pictureUrl={user.picture} />

        <UserAndName>
          <b>{user.name}</b>
          <p>@{user.user}</p>
        </UserAndName>
      </PostHeader>

      <div>
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
      </div>

      <Image>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG/1200px-Amanita_muscaria_%28fly_agaric%29.JPG"
          alt="Post"
        />
      </Image>
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

const SeeMore = styled.span`
  cursor: pointer;

  font-weight: 700;
  text-decoration: underline;
  color: ${RED};
`;

const Image = styled.div`
  width: 100%;
  background-color: ${LIGHT_GRAY};
  border-radius: 10px;
  margin-top: 2vh;

  overflow: hidden;

  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 50vh;
    min-height: 30vh;
  }
`;
