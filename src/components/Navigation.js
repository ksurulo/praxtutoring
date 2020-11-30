import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import About from './About.js'
import Contact from './Contact.js'

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from 'react-router-dom';
import logo from '../images/zeszyt_resized.jpg';
import {Offer} from './Offer';


export function Navigation() {
   return (
         <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
            <div className="title">
               PRA(X)TUTORING
            </div>
            <Router>
               <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  className="navigation"
               >
                  <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}><Tab label="Home"
                                                                                          className="navigation" /></Link>

                  <Link to="/offer" style={{color: 'inherit', textDecoration: 'inherit'}}><Tab label="Oferta"
                                                                                               className="navigation" /></Link>
                  <Link to="/contact" style={{color: 'inherit', textDecoration: 'inherit'}}><Tab label="Kontakt"
                                                                                                 className="navigation" /></Link>
                  <Link to="/about" style={{color: 'inherit', textDecoration: 'inherit'}}><Tab label="O nas"
                                                                                               className="navigation" /></Link>
               </Tabs>
               <Switch>
                  <Route path="/about">
                     <About />
                  </Route>
                  <Route path="/contact">
                     <Contact />
                  </Route>
                  <Route path="/offer">
                     <Offer />
                  </Route>
                  <Route path="/">
                     <Home />
                  </Route>
               </Switch>
            </Router>
         </Grid>
   );

   function Home() {
      return <Grid
         container
         direction="column"
         justify="center"
         alignItems="center"
      >
         <img src={logo} className="App-logo" alt="logo" />
         <Paper className="mainPaper">
            <div className="subtitle">HOME</div>
         </Paper>
      </Grid>;
   }
}