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
import { register } from 'redux/auth/auth-operations';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ValidationGroup, Validate, AutoDisabler } from 'mui-validate';
const theme = createTheme();

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleBlurPassword = event => {
    console.log('blur off');
    event.preventDefault();
    setShowPassword(false);
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      register({
        name:
          data.get('firstName').toLowerCase() +
          ' ' +
          data.get('lastName').toLowerCase(),
        email: data.get('email'),
        password: data.get('password'),
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Validate
                    name="firstName"
                    required={[true, 'First name is required']}
                    regex={
                      /[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
                    }
                  >
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                  </Validate>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Validate
                    name="lastName"
                    required={[true, 'Last name is required']}
                    regex={
                      /[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
                    }
                  >
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                  </Validate>
                </Grid>
                <Grid item xs={12}>
                  <Validate
                    name="email"
                    required={[true, 'E-mail is required']}
                    regex={
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                    }
                  >
                    <TextField
                      required
                      fullWidth
                      type={'email'}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      title="Email must contain '@' and '.'"
                    />
                  </Validate>
                </Grid>
                <Grid item xs={12}>
                  <Validate
                    name="password"
                    required={[true, 'Password is required']}
                    regex={[/^(?=.*)(?=.*[a-zA-Z0-9]).{7,}$/, '']}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      id="password"
                      autoComplete="current-password"
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onBlur={handleBlurPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Validate>
                </Grid>
              </Grid>
              <AutoDisabler>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </AutoDisabler>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    to={PAGE_NAMES.login}
                    state={{ from: location }}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ValidationGroup>
    </ThemeProvider>
  );
}
