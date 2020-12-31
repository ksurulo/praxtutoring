import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

export function OfferTable(props) {


   const useStyles = makeStyles({
      table: {
         minWidth: 100,
      }
   });

   const classes = useStyles();


   return <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
         <TableHead>
            <TableRow className='subtitle'>
               {props.titles.map((title) => (<TableCell className='subtitle'>{title}</TableCell>))}
            </TableRow>
         </TableHead>
         <TableBody>
            {props.rows.map((row) => (
               <TableRow key={row.name}>
                  <TableCell>
                     {row.name}
                  </TableCell>
                  <TableCell >{row.price}</TableCell>
                  {!row.price2 ? null:<TableCell >{row.price2}</TableCell>}
               </TableRow>
            ))}
         </TableBody>
      </Table>
   </TableContainer>
}