import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export function Navigation() {
   return (
      <Paper className="paper">
         <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
               <div className="title">
                  PRA(X)TUTORING
               </div>

               <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  className="navigation"
               >
                  <Tab label="Cennik"                    className="navigation" />
                  <Tab label="Kontakt"                   className="navigation" />
                  <Tab label="O mnie"                   className="navigation"   />
               </Tabs>
            </Grid>
      </Paper>

   );
}