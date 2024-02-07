import LogoIcon from '../../assets/icons/Logo.svg?react';
import Container from '../../components/Container';
import { FooterWrapper, Copyright } from './Footer.styled';

const Footer = () => {
  return (
    <footer>
      <Container>
        <FooterWrapper>
          <a href="/confetti/">
            <LogoIcon aria-label="logo" />
          </a>
          <Copyright>confetti © 2023</Copyright>
        </FooterWrapper>
      </Container>
    </footer>
  );
};

export default Footer;
