import styled from "styled-components";

export const ReviewsSection = styled.section`
  margin-top: 80px;

  @media screen and (min-width: 1280px) {
    margin-top: 100px;
  }
`;

export const ReviewsSectionTitle = styled.h2`
  margin-bottom: 36px;
  color: var(--accent-color);
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.36px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 48px;
    line-height: 110%;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 100px;
    line-height: normal;
    letter-spacing: -1px;
  }
`;
