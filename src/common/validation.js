import PropTypes from 'prop-types';
export const nameValidation =
  "[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
export const emailValidation =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
export const passwordValidation = '^(?=.*)(?=.*[a-zA-Z0-9]).{7,}$';

export const Validation = (regx, str) => {
  return new RegExp(regx).test(str);
};

Validation.propTypes = {
  regx: PropTypes.string.isRequired,
  str: PropTypes.string.isRequired,
};
