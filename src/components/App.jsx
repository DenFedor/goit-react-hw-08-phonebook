import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';
import Filter from './Filter/Filter';
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    contacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    ).length > 0
      ? window.alert('Exists')
      : this.setState(({ contacts }) => {
          const newPhonebookItem = {
            id: nanoid(),
            name: name,
            number: number,
          };
          return {
            contacts: [...contacts, newPhonebookItem],
          };
        });
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  delete = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h3>Filter by name</h3>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <h2>Contacts</h2>
        <ContactList contactsArr={filtered} onDelete={this.delete} />
      </Container>
    );
  }
}

export default App;
