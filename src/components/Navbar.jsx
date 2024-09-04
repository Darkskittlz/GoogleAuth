import '../App.css'
import { useState, useEffect } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const Navbar = ({ credentialResponse }) => {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState(null);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);


  useEffect(() => {
    if (credentialResponse && typeof credentialResponse === 'object') {
      const { avatar: picture, username: given_name } = credentialResponse;
      setAvatar(picture);
      setUsername(given_name);

      // Save to localStorage
      localStorage.setItem('avatar', picture);
      localStorage.setItem('username', given_name);
    } else {
      console.warn("Invalid credentialResponse format:", credentialResponse);
    }
  }, [credentialResponse]);


  const show = () => {
    setDrawerOpen(!drawerOpen);
  };


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full items-center top-0 fixed">
      <div className="flex  justify-end gap-4 mr-4">
      </div>
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
              onClick={show}
            >
              <MenuIcon className="white" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* Cosmate */}
            </Typography>
            <h2 className="text-2xl">Welcome {username}</h2>
            {auth && (
              <div>
                <IconButton
                  src={avatar}
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
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
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
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
              <ListItem button className="cursor-pointer">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button className="cursor-pointer">
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button className="cursor-pointer">
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
