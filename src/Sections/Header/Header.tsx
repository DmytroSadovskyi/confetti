import { useState, useEffect } from 'react';
import MenuIcon from '../../assets/icons/category.svg?react';
import LogoIcon from '../../assets/icons/Logo.svg?react';
import BurgerMenu from '../../components/BurgerMenu';
import { PageHeader, HeaderContainer, Wrapper, Logo, MenuButton } from './Header.styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
    const body = document.body;
    body.classList.toggle('menu-open');
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isHeaderScrolled = currentScrollPos > 0;

      setIsScrolled(isHeaderScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PageHeader $scrolled={isScrolled.toString()}>
      <HeaderContainer>
        <Wrapper>
          {!isScrolled && (
            <Logo href="../../../index.html">
              <LogoIcon aria-label="logo" />
            </Logo>
          )}

          <MenuButton type="button" onClick={handleToggleMenu} $scrolled={isScrolled.toString()}>
            {!isScrolled && <span>Menu</span>}
            <MenuIcon aria-label="menu" />
          </MenuButton>
        </Wrapper>
      </HeaderContainer>
      {isOpen && <BurgerMenu onClose={handleToggleMenu} />}
    </PageHeader>
  );
};

export default Header;
