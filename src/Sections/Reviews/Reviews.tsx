import ReviewsSlider from '../../components/ReviewsSlider';
import Container from '../../components/Container';
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
