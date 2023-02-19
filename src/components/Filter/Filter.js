import React from 'react';
import PropTypes from 'prop-types';
import { InputWrap, Form, Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <InputWrap>
      <Form>
        <Label>
          <Input
            type="text"
            name="filter"
            id="filter"
            value={value}
            onChange={onChange}
          />
        </Label>
      </Form>
    </InputWrap>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
