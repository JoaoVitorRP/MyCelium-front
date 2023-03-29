import styled from 'styled-components';
import pfp from '../../assets/images/default-pfp.png';

export default function ProfilePicture({ pictureUrl }) {
  return (
    <PictureContainer hasPicture={pictureUrl}>
      {/* eslint-disable-next-line */}
      <img src={pictureUrl || pfp} alt="Profile picture" />
    </PictureContainer>
  );
}

const PictureContainer = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  padding: ${(props) => (props.hasPicture ? '0px' : '5px')};
  background-color: ${(props) => (props.hasPicture ? 'transparent' : '#999999')};
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
