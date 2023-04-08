import React, { Component } from 'react';
import { FormStyles, Label, AddContactButton } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { Input } from 'components/Filter/Filter.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onChange, onSubmit } = this.props;
    const contactMap = onSubmit.map(contact => {
      if (name === contact.name) {
        alert(`${contact.name} is already in contacts`);
        return false;
      }
      if (number === contact.number) {
        alert(`Number "${contact.number}" is already in contacts`);
        return false;
      }
      return true;
    });

    if (contactMap.every(el => el === true)) {
      onChange(name, number);
    }
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <FormStyles onSubmit={this.onSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </Label>
        <AddContactButton type="submit">Add to contact list</AddContactButton>
      </FormStyles>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
