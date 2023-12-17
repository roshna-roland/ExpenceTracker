"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState,useEffect } from 'react';  // Remove useEffect import
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Autocomplete, Grid, Stack, TextField, Typography } from '@mui/material';







export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const [status, setStatus] = useState('');
  const handle = (event) => {
    setStatus(event.target.value);
  }
  const [type, setType] = React.useState('');
  const handleChange = (event) => {
    setType(event.target.value);
  }



 const handleSubmit = (e) => {
  e.preventDefault();
  window.location.reload();

  // Retrieve existing data from local storage
  const existingData = JSON.parse(window.localStorage.getItem('rows')) || [];
 const  updatedAt =  new Date().toLocaleString()
  // Create a new data object
  const newData = {
    "type": type,
    "date": updatedAt,
    "amount": amount,
    "stat_s": status,
  };

  // Add the new data to the existing array
  const updatedData = [...existingData,  newData];

  // Save the updated array in local storage
  window.localStorage.setItem('rows', JSON.stringify(updatedData));

  console.log(updatedData,"updated");
  
};


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="success" onClick={handleClickOpen}>
                Add
              </Button>
              <Typography variant="h5">Latest Transactions </Typography>
      </Stack>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>NEW TRANSACTIONS </DialogTitle>
        <DialogContent>

                                      <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                          <InputLabel id="demo-simple-select-label">TYPE</InputLabel>
                                          <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={type}
                                            label="type"
                                            onChange={handleChange}
                                          >
                                            <MenuItem value={"INCOME"}>INCOME</MenuItem>
                                            <MenuItem value={"EXPENSE"}>EXPENSE</MenuItem>
                                            
                                          </Select>
                                        </FormControl>
                                      </Box>

         

                                      <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                          <InputLabel id="demo-simple-select-label">CATEGORY</InputLabel>
                                          <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={status}
                                            label="STATUS"
                                            onChange={handle}
                                          >
                                            <MenuItem value={"TRANSPORTATION"}>TRANSPORTATION</MenuItem>                                            
                                            <MenuItem value={"ACCOMODATION"}>ACCOMODATION</MenuItem>
                                            <MenuItem value={"PURCHASE"}>PURCHASE</MenuItem>
                                            <MenuItem value={"TAX"}>TAX</MenuItem>
                                            <MenuItem value={"EXPORT"}>EXPORT</MenuItem>
                                            <MenuItem value={"FOOD"}>FOOD</MenuItem>
                                            
                                          </Select>
                                        </FormControl>
                                      </Box>   


                                    <TextField
                                      autoFocus
                                      margin="dense"
                                      id="amount"
                                      label="AMOUNT"
                                      type="number"
                                      fullWidth
                                      variant="standard"
                                      onChange={(e)=> setAmount(e.target.value)}
                                      value={amount}
                                    >PPPPPPPPP</TextField>       

        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>SAVE</Button>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


