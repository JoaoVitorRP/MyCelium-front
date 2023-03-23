import styled from 'styled-components';
import mushroomGirl from '../../assets/images/girl-with-mushroom.jpg';

export default function ImageContainer() {
  return (
    <ImgContainer>
      <CopyrightInfo>
        © Illustration Designed By 30000003853 From{' '}
        <a href="https://lovepik.com/image-401681896/fresh-spring-forest-mushroom-picking-girl-illustration.html">
          LovePik.com
        </a>
      </CopyrightInfo>
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  width: 65%;
  height: 100%;
  border-radius: 50px;
  background-image: url(${mushroomGirl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-left: 10px;
`;

const CopyrightInfo = styled.footer`
  position: fixed;
  bottom: 20px;
  right: 60px;

  font-size: 12px;
  color: #8e8e8e;
  text-shadow: 1px 1px black;

  a {
    color: inherit;
  }
`;
