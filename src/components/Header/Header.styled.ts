import styled from "styled-components";

interface MenuButtonProps {
  $scrolled: string;
}

export const PageHeader = styled.header<MenuButtonProps>`
  width: 100%;
  position: fixed;
  z-index: 30;
  padding: 30px 0;

  background-color: ${(props) =>
    props.$scrolled === "true" ? "white" : "transparent"};

  @media screen and (min-width: 1280px) {
    padding-top: 37px 0;
  }
`;

export const HeaderContainer = styled.div`
  min-width: 320px;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 30px;
    width: 100%;
    max-width: 1280px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  width: 104px;
  height: 27px;
`;

export const MenuButton = styled.button<MenuButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: inherit;
  border: none;
  margin-left: ${(props) => (props.$scrolled ? "auto" : "0")};
  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  & span {
    font-size: 24px;
    font-weight: 500;
    line-height: 90%;
    letter-spacing: -0.24px;
    text-transform: uppercase;
  }

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
