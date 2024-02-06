import { HeroSection, HeroTitle, DifferentColor, LeftBaloons, RightBaloons } from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <LeftBaloons />

      <HeroTitle>
        Tworzymy unikalne i niepowtarzalne
        <DifferentColor>dekoracje balonowe</DifferentColor>
        na imprezy
      </HeroTitle>

      <RightBaloons />
    </HeroSection>
  );
};

export default Hero;
