import { CustomerReview } from '../../types/review';
import CustomerIcon from '../../assets/icons/tag-user.svg?react';
import { ReviewWrapper, ReviewText, CustomerWrapper, Name } from './Review.styled';

const Review = ({ id, name, review }: CustomerReview) => {
  return (
    <ReviewWrapper>
      <ReviewText>{review}</ReviewText>
      <CustomerWrapper>
        <CustomerIcon aria-label={id} /> <Name>{name}</Name>
      </CustomerWrapper>
    </ReviewWrapper>
  );
};

export default Review;
