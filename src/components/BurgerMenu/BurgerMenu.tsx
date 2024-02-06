import { useEffect } from 'react';

import CloseIcon from '../../assets/icons/close.svg?react';
import {
  Backdrop,
  Wrapper,
  SecondWrapper,
  CloseButton,
  MobileMenu,
  MobileMenuItem,
} from './BurgerMenu.styled';

interface Props {
  onClose: () => void;
}

const BurgerMenu = ({ onClose }: Props) => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      onClose();

      const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
      const currentScroll = window.scrollY;
      const distance = targetOffset - currentScroll;
      const duration = 500;

      const startTime = performance.now();

      const step = (currentTime: number) => {
        const progress = currentTime - startTime;
        const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        window.scrollTo(
          0,
          currentScroll + easeInOutQuad(Math.min(progress / duration, 1)) * distance
        );

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  return (
    <Backdrop>
      <Wrapper>
        <SecondWrapper>
          <a href="../../../index.html">Confetti</a>
          <CloseButton type="button" aria-label="close-button" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </SecondWrapper>
        <nav>
          <MobileMenu>
            <MobileMenuItem>
              <a href="#" onClick={() => scrollToSection('hero')}>
                główna
              </a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#" onClick={() => scrollToSection('about')}>
                O nas
              </a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#" onClick={() => scrollToSection('reviews')}>
                Recenzje
              </a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#" onClick={() => scrollToSection('contacts')}>
                Kontakty
              </a>
            </MobileMenuItem>
          </MobileMenu>
        </nav>
      </Wrapper>
    </Backdrop>
  );
};

export default BurgerMenu;
