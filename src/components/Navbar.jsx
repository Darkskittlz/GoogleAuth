import '../App.css'
import React, { useState, useEffect, useContext } from 'react'; // Single import statement for all React-related elements
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LiveIconIMG from "../assets/live.png"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearSession } from '../actions/sessionActions';
import {
  Avatar,
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Box,
  MenuItem,
  Menu,
  Button,
  Icon,
  ToggleButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import ThemeIcon from './ThemeIcon';
import ThemeContext from './ThemeContext';

const LiveIcon = styled.img`
  display: flex;
  width: 20px;
`

// { credentialResponse }
const Navbar = () => {
  const { username, token } = useSelector(state => state.session);
  const [auth, setAuth] = React.useState(!!username);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const avatarSrc = localStorage.getItem('avatar');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedIsAuthenticated = localStorage.getItem('isAuthenticated')
  });
  const { toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Placeholder diagnostic log checks strip clear confirming auto sufficient root fixing future expected
  // console.log("Navbar: username = ", username);
  // console.log("Navbar: token = ", token);
  // console.log("Navbar: Avatar SRC from localStorage = ", avatarSrc);

  useEffect(() => {
    // Update the state for auth whenever username changes
    setAuth(!!username);
  }, [username]);

  const showDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const show = () => {
    setDrawerOpen(!drawerOpen);
  };


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigateSettings = () => {
    setAnchorEl(null);
    navigate('/settings');
  };

  const navigateHome = () => {
    setAnchorEl(null);
    navigate('/home');
  };

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    setAnchorEl(null);
    setIsAuthenticated(false);
    dispatch(clearSession());
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };


  return (
    <div className="w-full items-center top-0 fixed z-50">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="black" style={{
          border: "1px solid grey",
          borderRadius: "5px"
        }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={showDrawer}
            >
              <MenuIcon className="white" />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            // onClick={show}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            // onClick={show}
            >
              <LiveIcon src={LiveIconIMG} alt="Live Icon" />    {/* Icon Attribution: Debi Alpa Nugraha */}
            </IconButton>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="toggle theme"
              onClick={toggleTheme}
            >
              <ThemeIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* Cosmate */}
            </Typography>
            <h2 className="text-2xl">Welcome {username}</h2>
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
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={show}>
          <div
            role="presentation"
            onClick={show}
            onKeyDown={show}
            className="w-40"
          >
            <List>
              <ListItem button="true" className="cursor-pointer">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button="true" className="cursor-pointer">
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button="true" className="cursor-pointer">
                <ListItemText primary="Settings" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Box>
    </div >
  )
}

export default Navbar
