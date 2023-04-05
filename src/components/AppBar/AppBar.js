import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import authSelectors from 'redux/auth/auth-selectors';
import { firstLetterCapitalize } from 'common/firstLetterCapitalize';
import { logout } from 'redux/auth/auth-operations';
import { PAGE_NAMES } from 'router/paths';

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const userNameCapitalize = firstLetterCapitalize(userName);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: 'auto',
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('xs')]: {
        width: '10rem',
      },
      [theme.breakpoints.up('sm')]: {
        width: '20rem',
      },
    },
  }));
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImportContactsIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={PAGE_NAMES.contacts}
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Phonebook
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              type="text"
              name="filter"
              id="filter"
              onChange={e => handleFilterChange(e)}
              placeholder="Filter by Name"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <ImportContactsIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: 'flex' }}></Box>
          <Typography
            textAlign="center"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Welcome, {userNameCapitalize}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={userNameCapitalize.charAt(0)}
                  src=""
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="logout" onClick={() => dispatch(logout())}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
