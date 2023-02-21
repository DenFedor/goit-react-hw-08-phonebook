import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactFormHooks } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';
import Filter from './Filter/Filter';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function formSubmitHandler(data) {
    const { name, number } = data;
    contacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    ).length > 0
      ? window.alert('Exists')
      : setContacts(prevState => [
          ...prevState,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ]);
  }
  function onChangeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  function onDelete(deleteId) {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== deleteId)
    );
  }

  const getFiltered = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactFormHooks onSubmit={formSubmitHandler} />
      <h3>Filter by name</h3>
      <Filter onChange={onChangeFilter} value={filter} />
      <h2>Contacts</h2>
      <ContactList contactsArr={getFiltered()} onDelete={onDelete} />
    </Container>
  );
};
