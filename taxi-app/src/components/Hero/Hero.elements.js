import styled from 'styled-components';
import BgImg from '../../assets/bg-image.svg';

export const Section = styled.section`
  background: url(${BgImg});
  height: 70vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const SectionOverlay = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.41);
    height: 70vh;
    width: 100%;

    @media screen and (max-width: 768px) {
      height: 100vh;
  }
`;

export const HeroRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-reverse;
`;

export const HeroColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const StyledFormWrapper = styled.div`
  max-width: 540px;
  padding-top: 50px;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 540px;
  padding-top: 20px;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const HeaderBackground = styled.div`
  max-width: 700px;
  padding: 5px;
  justify-content: center;

   @media screen and (max-width: 768px) {
      margin-top: 65px;
      margin-bottom: -20px;
  }
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: #fff;
`;

export const Subtitle = styled.h2`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;
