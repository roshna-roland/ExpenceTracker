// "use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';



function ResponsiveAppBar() {


  return (
    <AppBar position="static" color="action" elevation={0}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              margin:1
              
            }}
          >
            Project Expense Tracking <br />Software
          </Typography>

          
         {/* //no need */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          

          <ControlPointOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,color:"#4615b2" }} />
          <CircleNotificationsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,color:"#4615b2"}} />      
          <SearchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,color:"#4615b2" }}  />


          <Typography display="block" >David |  </Typography>
          
          <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/flower.jpeg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;