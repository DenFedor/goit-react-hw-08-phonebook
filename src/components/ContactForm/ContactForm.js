import React from 'react';
import { Form, InputWrap, AddBtn, Label, Input } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  function submitHandler(e) {
    e.preventDefault();
    const form = e.target;
    const userInput = {
      name: form.elements.name.value,
      phone: form.elements.number.value,
    };
    dispatch(addContact(userInput));
    form.reset();
  }
  return (
    <InputWrap>
      <Form onSubmit={submitHandler}>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <AddBtn type="submit">Add Contacts</AddBtn>
      </Form>
    </InputWrap>
  );
};

