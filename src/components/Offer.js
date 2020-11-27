import Grid from '@material-ui/core/Grid';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import '../App.css';


export function Offer() {

   const initial_state = "Wybierz poziom nauczania"
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const [offerButtontext, setOfferButtonText] = React.useState(initial_state);


   const small_children = "Szkoła podstawowa 1-4"
   const children = "Szkoła podstawowa 5-8"
   const teens = "Szkoła średnia"
   const adults = "Studia"

   const useStyles = makeStyles({
      table: {
         minWidth: 650,
      },
   });

   function createData(name, price) {
      return { name, price};
   }

   const rows = [
      createData('Przygotowanie do matury z matematyki rozszerzonej', 50),
      createData('Przygotowanie do matury z matematyki podstawowej', 12),
      createData('Programowanie dla dzieci', 44),
      createData('Tworzenie stron internetowych', 23),
   ];
   const classes = useStyles();


   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };


   const handleClose = (text) => {

      if (typeof text === 'string'){
         setOfferButtonText(text)
      } else{
         setOfferButtonText(initial_state)
      }
      setAnchorEl(null);
   };
   return (
      <div className="priceBook">
      <Grid
         container
         direction="column"
         justify="center"
         alignItems="center">

        <div className="abc">Oferta:</div>

         <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            {offerButtontext}
         </Button>
         <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
         >
            <MenuItem onClick={() => handleClose(small_children)}>{small_children}</MenuItem>
            <MenuItem onClick={() => handleClose(children)}>{children}</MenuItem>
            <MenuItem onClick={() => handleClose(teens)}>{teens}</MenuItem>
            <MenuItem onClick={() => handleClose(adults)}>{adults}</MenuItem>
         </Menu>
         <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Przedmiot</TableCell>
                     <TableCell align="right">Cena</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((row) => (
                     <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Grid>
      </div>
   );
}