import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

// function createData(name, date, amount, stat_s) {
//   return { name, date, amount, stat_s};
// }

// const rows = [
//   // null
//   createData('Frozen yoghurt', 159, 6.0, 24),
//   createData('Ice cream ', 237, 9.0, 37),
//   createData('Eclair', 262, 16.0, 24),
//   createData('Cupcake', 305, 3.7, 67),
//   createData('Gingerbread', 356, 16.0, 49),
//   createData('Gingerbread', 356, 16.0, 49),
//   createData('Gingerbread', 356, 16.0, 49)
// ];


async function getStat_s(){
   const res = await fetch('http://localhost:4000/rows',{
  next: {
    revalidate:120
}})
// console.log(rows);
return  res.json()
}

export default async function BasicTable() {
  const data_load = await getStat_s()

  return (
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">AMOUNT</TableCell>
            <TableCell align="right">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data_load.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.stat_s}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}