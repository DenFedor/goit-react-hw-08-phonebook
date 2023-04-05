import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PAGE_NAMES } from 'router/paths';
import Copyright from 'components/Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ValidationGroup, Validate, AutoDisabler } from 'mui-validate';
import {
  emailValidation,
  passwordValidation,
  Validation,
} from 'common/validation';
import { toast } from 'react-toastify';
const theme = createTheme();

export default function SignIn() {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userEmail = data.get('email').toLowerCase();
    const userPassword = data.get('password');

    if (
      !Validation(passwordValidation, userPassword) &&
      !Validation(emailValidation, userEmail)
    ) {
      toast.warning('Email or password are not matching a pattern');
      return;
    }
    dispatch(
      login({
        email: userEmail,
        password: userPassword,
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <ValidationGroup>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Validate
                name="email"
                required={[true, 'E-mail address is required']}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Validate>
              <Validate
                name="password"
                required={[true, 'Password is required']}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Validate>
              <AutoDisabler>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </AutoDisabler>
              <Grid container>
                <Grid item>
                  <Link
                    to={PAGE_NAMES.register}
                    state={{ from: location }}
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ValidationGroup>
    </ThemeProvider>
  );
}
