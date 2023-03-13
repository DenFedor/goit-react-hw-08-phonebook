import React from 'react';
import { List, Li, ContactWrap, DeleteBtn } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();
  return (
    <ContactWrap>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Li key={id}>
            {name}
            <span>:</span>
            {number}{' '}
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
