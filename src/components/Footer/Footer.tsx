import LogoIcon from '../../assets/icons/Logo.svg?react';
import Container from '../Container';
import { FooterWrapper, Copyright } from './Footer.styled';

const Footer = () => {
  return (
    <footer>
      <Container>
        <FooterWrapper>
          <a href="../../../index.html">
            <LogoIcon />
          </a>
          <Copyright>confetti © 2023</Copyright>
        </FooterWrapper>
      </Container>
    </footer>
  );
};

export default Footer;
