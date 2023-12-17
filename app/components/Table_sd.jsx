"use client"
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Autocomplete, Grid, Stack, TextField, Typography } from '@mui/material';


const calculateNetIncome = (data) => {
    const incomeRows = data.filter((row) => row.type === 'INCOME');
    const expenseRows = data.filter((row) => row.type === 'EXPENSE');
    const totalIncome = incomeRows.reduce((sum, row) => sum + Number(row.amount), 0);
    const totalExpense = expenseRows.reduce((sum, row) => sum + Number(row.amount), 0);
    const netIncome = totalIncome - totalExpense;
    return netIncome;
      
    };

export default function BasicTable() {
    const [rows, setRows] = useState([]);
    const [netIncome, setNetIncome] = useState(0);
    const [selectedRow, setSelectedRow] = useState(null);
    const storedData = JSON.parse(localStorage.getItem('rows'));
    const [data, setData] = useState(storedData);
    // const [t,setT]=useState(null);
    // const [s,setS]=useState(null);    
    // const [a,setA]=useState(null);    
   
  useEffect(() => {
    const storedData =  JSON.parse(localStorage.getItem('rows'));
          if (storedData) {
            setRows([storedData]);
            console.log(storedData,"fetched")
            const income = calculateNetIncome(storedData);
            setNetIncome(income);       
    }}, [data,selectedRow]);

  const handleEdit = (row) => {
    console.log(row,"to be changed");
    setSelectedRow(row);
     };

  const handleSave = (e) => {
      e.preventDefault();
      const rowIndex = (data.findIndex((row) => row.id === selectedRow.id))
      console.log(rowIndex) 
      // setSelectedRow((prevRow) => ({
      //     ...prevRow,
      //     type: t,
      //     stat_s:s,
      //     amount:a}))
      console.log(selectedRow)    //working
        setData((prevData) => [
          ...prevData.slice(0, rowIndex),
          selectedRow,
          ...prevData.slice(rowIndex + 1)
        ]);
        localStorage.setItem('rows', JSON.stringify(data));
        console.log(data,"updated")
        setSelectedRow(null); 
      
  };

  const handleClose = () => {
    setR(null);
  };

  const handleDelete = (index) => {
    const updatedRows = [...storedData];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
    localStorage.setItem('rows', JSON.stringify(updatedRows));
    window.location.reload();
  };


if (storedData)
{

  return (
   
    <div>
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TYPE</TableCell>
            <TableCell align="right">DATE AND TIME</TableCell>
            <TableCell align="right">AMOUNT</TableCell>
            <TableCell align="right">CATEGORY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.stat_s}</TableCell>
              <TableCell>
                <ModeEditIcon sx={{ color:"#4615b2" }}  
                    startIcon={<EditIcon />}
                    onClick={() => handleEdit(row)}/>
              </TableCell>
              <TableCell>
              <HighlightOffIcon
                      sx={{ color: '#4615b2' }}
                      onClick={() => handleDelete(index)}
                    />
              </TableCell>

              
            </TableRow>
          ))}


          <TableRow>
            <TableCell>TOTAL INCOME</TableCell>
            <TableCell></TableCell>
            
            <TableCell align="right">{netIncome}</TableCell>
          </TableRow>


        </TableBody>
      </Table>
    </TableContainer>

  
    
    <Dialog open={!!selectedRow} onClose={handleClose}>
      <DialogTitle>Edit Row</DialogTitle>
      <DialogContent>
        {selectedRow && (
<>
                  <Select
                    label="Type"
                    value={selectedRow.type}
                    onChange={(e) =>
                      //setT(e.target.value)
                      setSelectedRow((prevRow) => ({
                        ...prevRow,
                        type: e.target.value }))
                    }
                      >
                    <MenuItem value={"INCOME"}>INCOME</MenuItem>
                    <MenuItem value={"EXPENSE"}>EXPENSE</MenuItem>
                  </Select>
        
                  <Select
                    label="Category"
                    value={selectedRow.stat_s}
                    onChange={(e) =>
                      //setS(e.target.value)
                      setSelectedRow((prevRow) => ({
                        ...prevRow,
                        stat_s: e.target.value}))
                        }>
                    <MenuItem value={"TRANSPORTATION"}>TRANSPORTATION</MenuItem>                                            
                    <MenuItem value={"ACCOMODATION"}>ACCOMODATION</MenuItem>
                    <MenuItem value={"PURCHASE"}>PURCHASE</MenuItem>
                    <MenuItem value={"TAX"}>TAX</MenuItem>
                    <MenuItem value={"EXPORT"}>EXPORT</MenuItem>
                    <MenuItem value={"FOOD"}>FOOD</MenuItem>
                  </Select>
  
            <TextField
              label="Amount"
              value={selectedRow.amount}
              onChange={(e) =>
                //setA(e.target.value)
                setSelectedRow((prevRow) => ({
                  ...prevRow,
                  amount: e.target.value, })) 
              } />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
    </div>
  );


}
}

