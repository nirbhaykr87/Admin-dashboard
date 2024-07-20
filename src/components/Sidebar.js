import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSidebar from './ThemeSidebar';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Dashboard, TableChart, CalendarToday, BarChart, Settings, AccountBox, Lock, PersonAdd, ErrorOutline } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <div style={{ width: 220 }}>
        <div style={{ padding: '16px', textAlign: 'center' }}>
          <Typography variant="h6" noWrap>
            Admin
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Dashboard
          </Typography>
        </div>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem button component={Link} to="/tables">
            <ListItemIcon><TableChart /></ListItemIcon>
            <ListItemText primary="Tables" />
          </ListItem>
          <ListItem button component={Link} to="/calendar">
            <ListItemIcon><CalendarToday /></ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button component={Link} to="/charts">
            <ListItemIcon><BarChart /></ListItemIcon>
            <ListItemText primary="Charts" />
          </ListItem>
          <ListItem button component={Link} to="/kanban">
            <ListItemIcon><BarChart /></ListItemIcon>
            <ListItemText primary="Kanban" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        
          <ListItem button component={Link} to="/account">
            <ListItemIcon><AccountBox /></ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem button component={Link} to="/login">
            <ListItemIcon><Lock /></ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button component={Link} to="/register">
            <ListItemIcon><PersonAdd /></ListItemIcon>
            <ListItemText primary="Register" />
          </ListItem>
          <ListItem button component={Link} to="/error">
            <ListItemIcon><ErrorOutline /></ListItemIcon>
            <ListItemText primary="Error" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
