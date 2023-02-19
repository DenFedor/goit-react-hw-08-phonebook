import React from 'react';
import PropTypes from 'prop-types';
import { List, Li, ContactWrap, DeleteBtn } from './ContactList.styled';
export const ContactList = ({ contactsArr, onDelete }) => {
  if (contactsArr.length > 0) {
    return (
      <ContactWrap>
        <List>
          {contactsArr.map(({ id, name, number }) => (
            <Li key={id}>
              {name}
              <span>:</span>
              {number}{' '}
              <DeleteBtn type="button" id={id} onClick={() => onDelete(id)}>
                Delete
              </DeleteBtn>
            </Li>
          ))}
        </List>
      </ContactWrap>
    );
  }
};

ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
