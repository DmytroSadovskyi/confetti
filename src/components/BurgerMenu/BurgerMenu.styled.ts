import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #ffffff;
`;

export const Wrapper = styled.div`
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 62px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 37px;
    padding-left: 112px;
    padding-right: 112px;
  }
`;

export const SecondWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    color: var(--accent-color);
    font-size: 36px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.36px;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;

export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 36px;
  }

  @media screen and (min-width: 768px) {
    gap: 48px;
  }
`;

export const MobileMenuItem = styled.li`
  & a {
    color: var(--main-color);
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.24px;
    text-transform: uppercase;
    text-decoration: none;

    transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover,
    &:focus {
      color: var(--accent-color);
    }

    @media screen and (min-width: 768px) {
      font-size: 40px;
      letter-spacing: -0.4px;
    }

    @media screen and (min-width: 768px) {
      font-size: 64px;
      letter-spacing: -0.64px;
    }
  }
`;
