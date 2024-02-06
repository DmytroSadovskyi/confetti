import MailIcon from '../../assets/icons/sms.svg?react';
import PhoneIcon from '../../assets/icons/call.svg?react';
import Container from '../Container';
import Form from '../Form';
import {
  ContactsSection,
  ContactsWrapper,
  FirstWrapper,
  ContactsSectionTitle,
  AddressText,
  Phone,
  Email,
  SecondWrapper,
} from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactsSection id="contacts">
      <Container>
        <ContactsWrapper>
          <FirstWrapper>
            <ContactsSectionTitle>Kontakty</ContactsSectionTitle>
            <AddressText>Confetti - Studio Dekoracij Balonami Warszawa</AddressText>
            <Phone href="tel:+48793351407">
              {' '}
              <PhoneIcon aria-label="phone-icon" /> +48 793 351 407
            </Phone>
            <Email href="mailto:confettibalony@gmail.com">
              <MailIcon aria-label="mail-icon" /> confettibalony@gmail.com
            </Email>
          </FirstWrapper>
          <SecondWrapper>
            <Form />
          </SecondWrapper>
        </ContactsWrapper>
      </Container>
    </ContactsSection>
  );
};

export default Contacts;
