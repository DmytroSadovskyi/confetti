import styled from "styled-components";

export const ReviewWrapper = styled.div`
  height: 229px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--extra-accent-color);
  border-radius: 24px;

  @media screen and (min-width: 1280px) {
    height: 220px;
    padding: 36px 24px;
  }
`;

export const ReviewText = styled.p`
  color: #222;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.18px;
`;

export const CustomerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.p`
  color: var(--extra-text-color);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
`;
