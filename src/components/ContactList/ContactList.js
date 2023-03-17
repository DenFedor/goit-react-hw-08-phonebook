import React from 'react';
import { List, Li, ContactWrap, DeleteBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <ContactWrap>
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <Li key={id}>
            {name}
            <span>:</span>
            {phone}
            <DeleteBtn
              type="button"
              id={id}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteBtn>
          </Li>
        ))}
      </List>
    </ContactWrap>
  );
};
