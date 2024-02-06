import styled from "styled-components";
import Slider from "react-slick";

import ArrowLeft from "../../assets/icons/arrow-left.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

export const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    gap: 16px;
  }

  .slick-prev,
  .slick-next {
    background: #fff;
    top: 135%;
  }

  .slick-next {
    right: 40%;
  }

  .slick-prev {
    left: 40%;
  }

  @media screen and (min-width: 768px) {
    .slick-track {
      gap: 16px;
    }
  }

  @media screen and (min-width: 1280px) {
    .slick-track {
      gap: 26px;
    }
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
`;

export const RightArrow = styled(ArrowRight)`
  position: absolute;
  display: flex;
  height: 59px;
  width: 59px;
  padding: 16px 15px 16px 17px;
  justify-content: center;
  align-items: center;

  border-radius: 1000px;
  border: 1px solid #d2d2d2;

  background: #fff;
`;

export const LeftArrow = styled(ArrowLeft)`
  position: absolute;
  display: flex;
  height: 59px;
  width: 59px;
  padding: 16px 15px 16px 17px;
  justify-content: center;
  align-items: center;

  border-radius: 1000px;
  border: 1px solid #d2d2d2;

  background: #fff;

  path {
    stroke: black;
  }
`;
