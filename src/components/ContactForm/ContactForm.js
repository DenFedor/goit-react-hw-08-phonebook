import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, InputWrap, AddBtn, Label, Input } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  changeHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <InputWrap>
        <Form onSubmit={this.submitHandler}>
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              id="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </Label>
          <Label htmlFor="name">
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.changeHandler}
            />
          </Label>
          <AddBtn type="submit">Add Contacts</AddBtn>
        </Form>
      </InputWrap>
    );
  }
}
export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
