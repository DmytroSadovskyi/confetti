import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import {
  CustomerForm,
  FormContainer,
  InputWrapper,
  Label,
  Input,
  TextareaWrapper,
  Textarea,
  FormButton,
  ErrorMessage,
  LeftBalloonWrapper,
  RightBalloonWrapper,
} from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const nameRegex = /^[a-zA-Z][a-zA-Z0-9_\s]*$/;
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> | undefined = e => {
    setName(e.target.value);

    if (!nameRegex.test(e.target.value) || !e.target.value) {
      setNameError('Nieprawidłowe Іmię');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> | undefined = e => {
    setEmail(e.target.value);

    if (!emailRegex.test(e.target.value) || !e.target.value) {
      setEmailError('Nieprawidłowy email');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined = e => {
    setMessage(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = e => {
    e.preventDefault();

    if (!name || !email || nameError || emailError) {
      setNameError('Wpisz imię');
      setEmailError('Wpisz adres e-mail');

      return;
    }

    setName('');
    setEmail('');
    setMessage('');

    toast.success('Twoje dane zostały wysłane');
  };

  return (
    <>
      <LeftBalloonWrapper />
      <RightBalloonWrapper />

      <CustomerForm onSubmit={handleSubmit}>
        <FormContainer>
          <Toaster />
          <InputWrapper $hasError={!!nameError}>
            <Label htmlFor="name">Imię*</Label>
            <Input
              type="text"
              name="name"
              value={name}
              id="name"
              placeholder="Imię"
              onChange={handleNameChange}
              $hasError={!!nameError}
            />
            {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper $hasError={!!emailError}>
            <Label htmlFor="email">E-mail*</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="mail@gmail.com"
              onChange={handleEmailChange}
              $hasError={!!emailError}
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </InputWrapper>
          <TextareaWrapper>
            <Label htmlFor="message">Wiadomość</Label>
            <Textarea
              name="message"
              value={message}
              id="message"
              placeholder="Twoja wiadomość..."
              onChange={handleMessageChange}
            ></Textarea>
          </TextareaWrapper>
          <FormButton type="submit" disabled={!!(nameError || emailError)}>
            Wyślij
          </FormButton>
        </FormContainer>
      </CustomerForm>
    </>
  );
};

export default Form;
