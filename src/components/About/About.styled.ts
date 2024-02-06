import styled from "styled-components";

export const AboutSection = styled.section`
  margin: 50px 0 0 0;

  @media screen and (min-width: 1280px) {
    margin: 78px 0 100px 0;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-bottom: 36px;

  @media screen and (min-width: 480px) {
    max-width: 584px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px;
    gap: 16px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
    margin-right: auto;
    margin-left: auto;

    margin-bottom: 64px;
  }
`;

export const AboutTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 83%;
  letter-spacing: -0.36px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 56px;
    line-height: normal;
    letter-spacing: -0.56px;
  }
`;

export const AboutText = styled.p`
  color: var(--extra-text-color);
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.2px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.24px;
  }
`;
