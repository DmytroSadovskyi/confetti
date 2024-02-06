import styled, { keyframes } from 'styled-components';
import bg from '../../assets/images/hero-bg.png';
import right from '../../assets/images/there-are-bunch-pink-balloons-floating-air-generative-ai2.png';
import left from '../../assets/images/there-are-bunch-pink-balloons-floating-air-generative-ai3.png';

const balloonAnimation = keyframes`
  0% {
    transform: translate(0, 0);
    
  }
  50% {
    transform: translate(-20px, -30px);
    
  }
  100% {
    transform: translate(0);
    
  }
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

export const HeroTitle = styled.h1`
  display: flex;
  flex-direction: column;
  width: 319px;
  padding: 0 16px;
  color: var(--accent-color);
  font-size: 40px;
  font-weight: 500;
  line-height: 85%;
  letter-spacing: -0.4px;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 484px;
    padding: 0 13px;
    font-size: 64px;
    letter-spacing: -0.64px;
    line-height: 82%;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 70px;
    width: 771px;
    font-size: 88px;
    letter-spacing: -0.88px;
    line-height: 90%;
  }
`;

export const DifferentColor = styled.span`
  color: var(--main-color);
`;

export const LeftBaloons = styled.div`
  z-index: -1;
  position: absolute;
  left: -60px;
  top: 58px;
  width: 155px;
  height: 158px;

  background-image: url(${left});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${balloonAnimation} 3s ease-in-out infinite;

  @media screen and (min-width: 768px) {
    width: 273px;
    height: 278px;
  }

  @media screen and (min-width: 1280px) {
    width: 461px;
    height: 469px;
  }
`;
export const RightBaloons = styled.div`
  position: absolute;
  z-index: -1;
  right: -40px;
  bottom: 50px;
  width: 178px;
  height: 181px;
  background-image: url(${right});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${balloonAnimation} 3s ease-in-out infinite;

  @media screen and (min-width: 768px) {
    width: 306px;
    height: 312px;
    right: -60px;
    bottom: -2px;
  }

  @media screen and (min-width: 1280px) {
    width: 384px;
    height: 391px;
  }
`;
