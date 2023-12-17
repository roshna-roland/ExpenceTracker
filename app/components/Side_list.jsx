import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, TextField } from '@mui/material';
import { red } from '@mui/material/colors';

export default function BasicList() {



  return (

    <Box sx={{  width: '100%', minHeight:700 , maxWidth: 315, bgcolor:"#4615b2"}}>
      <nav aria-label="main mailbox folders ">
      <img
        src="/ext.png" // Replace with the actual URL of your image
        alt="hello"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
        <List sx={{color:'white'}}>
          <ListItem disablePadding >
            <ListItemButton >
              <ListItemIcon>
              <DashboardIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="DASHBOARD"  >
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="TRANSACTIONS" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PaymentIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="CARDS" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PaymentIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="BANK ACCOUNTS" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="NOTIFICATIONS" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="SETTINGS" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}