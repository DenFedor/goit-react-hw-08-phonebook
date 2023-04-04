import { PropTypes } from '@mui/material';
export const firstLetterCapitalize = name => {
  return name
    .split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
};
firstLetterCapitalize.propTypes={
  name:PropTypes.string.isRequired,
}