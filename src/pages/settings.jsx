import '../App.css'
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  Avatar,
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  MenuItem,
  Menu,
} from '@mui/material';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const AvatarIcon = () => {
  const { username } = useSelector((state) => state.session);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const avatarSrc = localStorage.getItem('avatar');
  const [auth, setAuth] = React.useState(!!username);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const navigateHome = () => {
    setAnchorEl(null);
    navigate('/home');
  };

  const navigateSettings = () => {
    setAnchorEl(null);
    navigate('/settings');
  };

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    setAnchorEl(null);
    setAuth(false);
    dispatch(clearSession());
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };
  return (
    <>
      {auth && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            {avatarSrc ? (
              <Avatar src={avatarSrc} alt={username || "User"} />
            ) : (
              <AccountCircle />
            )}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={navigateHome}>Home</MenuItem>
            <MenuItem onClick={navigateSettings}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </>
  );
}

AvatarIcon.propTypes = {
  navigate: PropTypes.func.isRequired,
};

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for settings</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const Settings = ({ credentialResponse, theme = demoTheme, toggleTheme, window: windowProp }) => {
  const demoWindow = windowProp && windowProp();

  const [pathname, setPathname] = React.useState('/home');
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.session);
  const avatarSrc = localStorage.getItem('avatar');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const customBranding = {
    title: username ? `${username}'s Settings` : 'Settings',
  };

  return (
    <>
      <CssBaseline />
      <Navbar credentialResponse={credentialResponse} theme={theme} toggleTheme={toggleTheme} />
      <div className="items-center justify-center flex flex-col">
        <div className="w-full backdrop-blur z-10 text-white p-12 rounded-xl h-screen">
          <AppProvider
            className="w-full"
            branding={customBranding}
            navigation={[
              {
                segment: 'home',
                title: 'Account',
                icon: <DescriptionIcon />,
              },
              {
                segment: 'about',
                title: 'Privacy',
                icon: <DescriptionIcon />,
              },
            ]}
            session={{ user: { name: username } }}
            router={router}
            theme={demoTheme}
            window={demoWindow}
          >
            <div className='bottom-0 right-0 fixed w-1/8'>
              <AppBar position="relative" color="transparent" >
                <AvatarIcon navigate={navigate} />
              </AppBar>
            </div>
            <DashboardLayout>
              <DemoPageContent pathname={pathname} />
            </DashboardLayout>
          </AppProvider>
        </div>
      </div >
    </>
  )
}

Settings.propTypes = {
  window: PropTypes.func,
};

export default Settings;
