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
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageHeader>
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
