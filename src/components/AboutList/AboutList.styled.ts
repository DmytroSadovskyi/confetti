import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  padding: 48px;
  color: white;
  display: grid;
  gap: 40px;
  border-radius: 24px;

  & h3 {
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 85%;
    letter-spacing: -0.24px;
    text-transform: uppercase;
  }

  & p {
    color: #fffffe;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    letter-spacing: -0.2px;
  }

  &:nth-child(1) {
    background-color: var(--accent-color);
  }

  &:nth-child(1) > h3 {
    padding-right: 200px;
  }

  &:nth-child(1) > p {
    padding-right: 145px;
  }

  &:nth-child(2) {
    background-color: #222;
  }

  &:nth-child(2) > h3 {
    padding-right: 245px;
  }

  &:nth-child(2) > p {
    padding-right: 130px;
  }

  &:nth-child(3) {
    background-color: #444;
  }

  &:nth-child(3) > h3 {
    padding-right: 222px;
  }

  &:nth-child(3) > p {
    padding-right: 81px;
  }

  &:nth-child(4) {
    background-color: #808080;
  }

  &:nth-child(4) > h3 {
    padding-right: 297px;
  }

  &:nth-child(4) > p {
    padding-right: 85px;
  }

  @media screen and (min-width: 1280px) {
    &:nth-child(1) > h3 {
      padding-right: 180px;
    }

    &:nth-child(1) > p {
      padding-right: 145px;
    }

    &:nth-child(2) > h3 {
      padding-right: 145px;
    }

    &:nth-child(2) > p {
      padding-right: 0;
    }

    &:nth-child(3) > h3 {
      padding-right: 122px;
    }

    &:nth-child(3) > p {
      padding-right: 0;
    }

    &:nth-child(4) > h3 {
      padding-right: 198px;
    }

    &:nth-child(4) > p {
      padding-right: 0;
    }
  }
`;
