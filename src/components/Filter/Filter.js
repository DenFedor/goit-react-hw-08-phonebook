import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { InputWrap, Form, Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  return (
    <InputWrap>
      <Form>
        <Label>
          <Input
            type="text"
            name="filter"
            id="filter"
            onChange={e => handleFilterChange(e)}
          />
        </Label>
      </Form>
    </InputWrap>
  );
};
export default Filter;
