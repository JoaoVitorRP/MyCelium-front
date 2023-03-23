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
  width: calc(65% - 10px);
  height: 100%;
  border-radius: 50px;
  background-image: url(${mushroomGirl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-left: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const CopyrightInfo = styled.footer`
  position: fixed;
  bottom: 30px;
  right: 70px;

  font-size: 12px;
  color: #8e8e8e;
  text-shadow: 1px 1px black;

  a {
    color: inherit;
  }
`;
