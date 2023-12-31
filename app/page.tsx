"use client";
import React from 'react'
import Side_list from "./components/Side_list"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
// import Chart_bar from "./components/Chart_bar"
import { Autocomplete, Grid, Stack, TextField } from '@mui/material';
import Table_sd from './components/Table_sd'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function Hello() {
  return (
    <div className='main'> 
      
      
      
      <Grid container spacing={0}>
        <Grid item xs={2.5}>
        <Side_list />
        </Grid>
        <Grid item xs={9.5}>
        <Navbar />
      
          <Grid container justifyContent="flex-end">
          
                          <Grid item xs={6} container justifyContent="space-evenly">
                                  <Stack direction="row" spacing={2}>
                                      <Card sx={{  minWidth: 180 ,height:130 ,bgcolor:"#b2ebf2"}} elevation={0}>
                                            <React.Fragment>
                                              <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Current Balance
                                                </Typography>
                                                <Typography variant="h5" color="text.secondary" component="div">
                                                  $8200
                                                </Typography>
                                                <Typography sx={{ mb: 1.5 }} color="text.success">
                                                  21%
                                                </Typography>
                                              </CardContent>
                                            </React.Fragment>
                                      </Card>
                                      <Card sx={{ minWidth: 180 , height:130 ,bgcolor:"#e1bee7"}}>
                                            <React.Fragment>
                                              <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                  Total Income
                                                </Typography>
                                                <Typography variant="h5" color="text.secondary"  component="div">
                                                  $1550
                                                </Typography>
                                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                  7.9%
                                                </Typography>
                                              </CardContent>
                                            </React.Fragment>
                                      </Card>
                                      <Card sx={{ minWidth: 180 , height:130,bgcolor:"#b2ebf2" }}>
                                            <React.Fragment>
                                              <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                  Total Expenses
                                                </Typography>
                                                <Typography variant="h5" color="text.secondary" component="div">
                                                  $5210
                                                </Typography>
                                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                  32%
                                                </Typography>
                                              </CardContent>
                                            </React.Fragment>
                                      </Card>
                                  </Stack>


                      {/* <Chart_bar /> */}
                                  
                          
                          </Grid>
                          



                          <Grid item xs={6} >
                         
                          <Dashboard />
                          <Table_sd />
                          </Grid>

          </Grid>
        </Grid>
      </Grid>
      


    </div>
  )
}
