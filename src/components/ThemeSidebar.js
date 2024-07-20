import React, { useState } from 'react';
import { createCustomTheme, lightTheme, darkTheme } from '../theme';
import { Button, Menu, MenuItem, TextField, Divider } from '@mui/material';
import { Box } from '@mui/system';

const themes = [
  { name: 'Light', theme: lightTheme },
  { name: 'Dark', theme: darkTheme },
];

const ThemeSidebar = ({ onThemeChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [customPrimary, setCustomPrimary] = useState('#ff5722');
  const [customSecondary, setCustomSecondary] = useState('#4caf50');
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme) => {
    onThemeChange(theme);
    handleClose();
  };

  const handleCustomThemeChange = () => {
    onThemeChange(createCustomTheme(customPrimary, customSecondary));
    handleClose();
  };

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: 'background.paper',
        padding: 2,
        boxShadow: 2,
      }}
    >
      <h3>Select Theme</h3>
      <Button
        aria-controls={open ? 'theme-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Choose Theme
      </Button>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {themes.map((theme) => (
          <MenuItem
            key={theme.name}
            onClick={() => handleThemeChange(theme.theme)}
          >
            {theme.name}
          </MenuItem>
        ))}
        <Divider />
        <MenuItem>
          <div>
            <TextField
              label="Primary Color"
              variant="outlined"
              size="small"
              value={customPrimary}
              onChange={(e) => setCustomPrimary(e.target.value)}
              style={{ marginBottom: '8px' }}
            />
            <TextField
              label="Secondary Color"
              variant="outlined"
              size="small"
              value={customSecondary}
              onChange={(e) => setCustomSecondary(e.target.value)}
            />
            <Button onClick={handleCustomThemeChange} style={{ marginTop: '8px' }}>
              Apply Custom Theme
            </Button>
          </div>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ThemeSidebar;
