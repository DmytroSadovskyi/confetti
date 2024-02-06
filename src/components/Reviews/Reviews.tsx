import ReviewsSlider from '../ReviewsSlider';
import Container from '../Container';
import { ReviewsSection, ReviewsSectionTitle } from './Reviews.styled';

const Reviews = () => {
  return (
    <ReviewsSection id="reviews">
      <Container>
        <ReviewsSectionTitle>Recenzje</ReviewsSectionTitle>
        <ReviewsSlider />
      </Container>
    </ReviewsSection>
  );
};

export default Reviews;
