import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h3>Filter by name</h3>
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </Container>
  );
};
