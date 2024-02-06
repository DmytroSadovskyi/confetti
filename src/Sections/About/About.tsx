import { useState, useEffect } from 'react';

import Container from '../../components/Container';
import AboutSlider from '../../components/AboutSlider';
import AboutList from '../../components/AboutList';
import { AboutSection, MainWrapper, TextWrapper, AboutTitle, AboutText } from './About.styled';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AboutSection id="about">
      <Container>
        <MainWrapper>
          <TextWrapper>
            <AboutTitle>Kreatywny zespół dekoratorów</AboutTitle>

            <AboutText>
              Młodzi i energiczni, rozwijający działalność w zakresie tworzenia dekoracji na imprezy
              i wydarzenia
            </AboutText>
          </TextWrapper>
        </MainWrapper>
        {isMobile ? <AboutSlider /> : <AboutList />}
      </Container>
    </AboutSection>
  );
};

export default About;
