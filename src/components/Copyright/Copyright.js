import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { PAGE_NAMES } from 'router/paths';
export default function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href={PAGE_NAMES.home}>
          Phonebook
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }