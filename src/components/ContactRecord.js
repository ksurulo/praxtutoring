import Grid from '@material-ui/core/Grid';
import React from 'react';

export default function ContactRecord(props) {
   return (
      <Grid
         container
         direction="row"
         justify="flex-start"
         spacing={2}
      >
         <Grid item
               justify="center"
               alignItems="center">
            {props.icon}
         </Grid>

         <Grid item>
               <div className="subtitle3">{props.title}</div>
         </Grid>
      </Grid>)

}