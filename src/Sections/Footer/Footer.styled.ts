import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--accent-color);

  @media screen and (min-width: 768px) {
    padding: 24px 0 32px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px 0 36px 0;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
`;
