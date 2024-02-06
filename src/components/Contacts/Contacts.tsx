import Container from "../Container";
import Form from "../Form";
import {
  ContactsSection,
  ContactsWrapper,
  FirstWrapper,
  ContactsSectionTitle,
  AddressText,
  Phone,
  Email,
  SecondWrapper,
} from "./Contacts.styled";
const Contacts = () => {
  return (
    <ContactsSection id="contacts">
      <Container>
        <ContactsWrapper>
          <FirstWrapper>
            <ContactsSectionTitle>Kontakty</ContactsSectionTitle>
            <AddressText>
              Confetti - Studio Dekoracij Balonami Warszawa
            </AddressText>
            <Phone href="tel:+48793351407">+48 793 351 407</Phone>
            <Email href="mailto:confettibalony@gmail.com">
              confettibalony@gmail.com
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
