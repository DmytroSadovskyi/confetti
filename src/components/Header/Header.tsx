import { useState, useEffect } from "react";
import MenuIcon from "../../assets/icons/category.svg?react";
import LogoIcon from "../../assets/icons/Logo.svg?react";
import BurgerMenu from "../BurgerMenu";
import {
  PageHeader,
  HeaderContainer,
  Wrapper,
  Logo,
  MenuButton,
} from "./Header.styled";

const Header = () => {
  const body = document.body;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);

    body.classList.add("menu-open");
  };
  const handleClose = () => {
    setIsOpen(false);
    body.classList.remove("menu-open");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isHeaderScrolled = currentScrollPos > 0;

      setIsScrolled(isHeaderScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageHeader $scrolled={isScrolled.toString()}>
      <HeaderContainer>
        <Wrapper>
          {!isScrolled && (
            <Logo href="../../../index.html">
              <LogoIcon />
            </Logo>
          )}

          <MenuButton
            type="button"
            onClick={handleOpen}
            $scrolled={isScrolled.toString()}
          >
            {!isScrolled && <span>Menu</span>}
            <MenuIcon aria-label="menu" />
          </MenuButton>
        </Wrapper>
      </HeaderContainer>
      {isOpen && <BurgerMenu onClose={handleClose} />}
    </PageHeader>
  );
};

export default Header;
