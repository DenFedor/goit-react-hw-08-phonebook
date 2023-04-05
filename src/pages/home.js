import BackgroundImage from '../assets/images/bg.jpg';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PAGE_NAMES } from 'router/paths';
import Copyright from 'components/Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import SignIn from 'components/Login/login';
const theme = createTheme();

export default function SignInSide() {

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url('${BackgroundImage}')`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <SignIn />
      </Grid>
    </ThemeProvider>
  );
}
