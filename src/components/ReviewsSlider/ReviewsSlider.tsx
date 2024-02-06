import reviews from '../../reviews.json';

import Review from '../Review';
import { StyledSlider, SliderWrapper, LeftArrow, RightArrow } from './ReviewsSlider.styled';

const ReviewsSlider = () => {
  interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
  }

  const SampleNextArrow = ({ className, style, onClick }: SampleArrowProps) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'white',
          height: '56px',
          width: '56px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <RightArrow />
      </div>
    );
  };

  const SamplePrevArrow = ({ className, style, onClick }: SampleArrowProps) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'white',
          height: '56px',
          width: '56px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <LeftArrow />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    initialSlide: 3,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          swipe: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <SliderWrapper>
      <StyledSlider {...settings}>
        {reviews.map(review => (
          <Review key={review.id} name={review.name} review={review.review} />
        ))}
      </StyledSlider>
    </SliderWrapper>
  );
};

export default ReviewsSlider;
