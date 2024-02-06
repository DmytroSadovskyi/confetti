import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderContainer = styled.div`
  max-width: 100%;
  width: 360px;
  padding: 0;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    padding: 0 20px;
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 30px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
export const StyledCard = styled.div`
  height: 253px;
  padding: 24px;
  color: white;
  border-radius: 24px;

  ${props => {
    const cardId = props.id;

    switch (cardId) {
      case '1':
        return 'background-color: var(--accent-color);';
      case '2':
        return 'background-color: #222;';
      case '3':
        return 'background-color: #444;';
      case '4':
        return 'background-color: #808080;';
      default:
        return 'background-color: #999;';
    }
  }}
`;

export const StyledSlider = styled(Slider)`
  .slider-list {
    display: block;
  }

  .slick-track {
    display: flex;
    gap: 16px;
  }

  ${StyledCard} {
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const StyledCardTitle = styled.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.24px;
  text-transform: uppercase;
`;

export const StyledCardText = styled.p`
  color: #fffffe;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.16px;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;
