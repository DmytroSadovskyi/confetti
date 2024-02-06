import styled from "styled-components";
import MailIcon from "../../assets/icons/sms.svg";
import PhoneIcon from "../../assets/icons/call.svg";

export const ContactsSection = styled.section`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 190px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 200px;
    margin-bottom: 100px;
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const ContactsSectionTitle = styled.h2`
  color: var(--accent-color);
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.36px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 110%;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 100px;
    letter-spacing: -1px;
    line-height: 95%;
  }
`;

export const AddressText = styled.p`
  margin-top: 36px;
  padding: 0 30px;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 80%;
  letter-spacing: -0.28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    padding: 0 242px;
    margin-top: 24px;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 1280px) {
    text-align: start;
    font-size: 40px;
    line-height: 95%;
    letter-spacing: -0.4px;
    padding: 0 234px 0 0;
    margin-top: 56px;
  }
`;

export const Phone = styled.a`
  margin-top: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: var(--extra-text-color);
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  text-decoration: none;

  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &::before {
    content: "";
    background-image: url(${PhoneIcon});
    width: 24px;
    height: 24px;

    &:hover,
    &:focus {
      stroke: var(--accent-color);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: normal;
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 32px;
  }
`;

export const Email = styled.a`
  margin-top: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: var(--extra-text-color);
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  text-decoration: none;
  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    color: var(--accent-color);

    &::before {
      stroke: var(--accent-color);
    }
  }

  &::before {
    content: "";
    background-image: url(${MailIcon});
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: normal;
    letter-spacing: -0.24px;
  }
`;

export const SecondWrapper = styled.div`
  position: relative;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 88px;
  }
`;
