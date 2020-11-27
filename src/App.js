import logo from './images/zeszyt.jpg';
import './App.css';
import {Navigation} from './components/Navigation';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';


import {Offer} from './components/Offer';


function App() {

   return (
      <Paper>
         <Grid className="mainGrid"
            container
            direction="column"
            justify="center"
            alignItems="center"
         >
            <Navigation />

               <img src={logo} className="App-logo" alt="logo" />
            <Offer />
         </Grid>
      </Paper>
   );
}

export default App;
