import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100%;
  width: 360px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 30px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
