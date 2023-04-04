import React from 'react';
import { List, Li, ContactWrap, DeleteBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ContactWrap>
      {filteredContacts.length < 1 ? (
        <Li>Your contact list ist empty</Li>
      ) : (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <Li key={id}>
              {name}
              <span>:</span>
              {number}
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
      )}
    </ContactWrap>
  );
};
