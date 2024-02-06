import styled from "styled-components";
import RightBalloon from "../../assets/images/there-are-bunch-pink-balloons-floating-air-generative-ai2.png";
import LeftBalloon from "../../assets/images/there-are-bunch-pink-balloons-floating-air-generative-ai3.png";

interface InputProps {
  $hasError: boolean;
}

export const LeftBalloonWrapper = styled.div`
  position: absolute;
  background-image: url(${LeftBalloon});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  display: none;
  z-index: -1;

  width: 245px;
  height: 247px;
  transform: rotate(0deg);
  top: 45px;
  left: -95px;

  @media screen and (min-width: 768px) {
    display: block;
    width: 460px;
    height: 469px;
    transform: rotate(-33deg);
    top: -120px;
    left: -146px;
  }
`;

export const RightBalloonWrapper = styled.div`
  position: absolute;
  background-image: url(${RightBalloon});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  display: none;
  z-index: -1;

  width: 247px;
  height: 250px;
  transform: rotate(9deg);

  bottom: 40px;
  right: -70px;

  @media screen and (min-width: 768px) {
    display: block;
    width: 383px;
    height: 390px;
    transform: rotate(-6deg);

    bottom: 70px;
    right: -123px;
  }
`;

export const CustomerForm = styled.form`
  width: 100vw;
  margin: auto;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 51px 20px;
  background-color: var(--extra-accent-color);

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 57px 83px 56px 82px;
    border-radius: 24px;
    background: #ffeff0;
  }
`;

export const FormContainer = styled.div`
  max-width: 100%;
  width: 360px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const InputWrapper = styled.div<InputProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: ${(props) => (props.$hasError ? "0" : "24px")};
  @media screen and (min-width: 768px) {
    margin-bottom: ${(props) => (props.$hasError ? "0" : "32px")};
  }
`;

export const Label = styled.label`
  margin-left: 24px;
  color: #949494;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 20px 24px;
  align-items: center;
  border-radius: 9px;
  border: 1px solid #d2d2d2;
  background: #fff;
  color: ${(props) => (props.$hasError ? "var(--accent-color)" : "#222")};

  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  &::placeholder {
    color: #888;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.18px;
  }
`;

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Textarea = styled.textarea`
  height: 128px;
  resize: none;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 24px;
  align-items: center;
  border-radius: 9px;
  border: 1px solid #d2d2d2;
  background: #fff;

  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  &::placeholder {
    color: #888;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.18px;
  }

  @media screen and (min-width: 768px) {
    height: 136px;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  display: flex;
  padding: 20px 32px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-color);
  border-radius: 24px;
  border: none;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(237, 75, 94, 0.75);
  }

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
    margin-top: 32px;

    font-size: 40px;
    letter-spacing: -0.4px;
  }
`;

export const ErrorMessage = styled.span`
  margin-right: 24px;
  color: var(--accent-color);
  text-align: right;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
`;
