import styled from 'styled-components';
import pfp from '../../assets/images/default-pfp.png';

export default function ProfilePicture() {
  return (
    <PictureContainer>
      {/* eslint-disable-next-line */}
      <img src={pfp} alt="Profile picture" />
    </PictureContainer>
  );
}

const PictureContainer = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  padding: 5px;
  background-color: #999999;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
