import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import mordka from '../images/ryjek.jpg'

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from 'react-router-dom';
import logo from '../images/zeszyt.jpg';
import {Offer} from './Offer';


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
            <Router>
               <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  className="navigation"
               >
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
                     <Offera />
                  </Route>
                  <Route path="/">
                     <Home />
                  </Route>
               </Switch>
            </Router>
         </Grid>
      </Paper>

   );

   function Home() {
      <img src={logo} className="App-logo" alt="logo" />
      return <h2>Home</h2>;
   }

   function About() {
      return <Grid className="mainGrid"
                   container
                   direction="column"
                   justify="center"
                   alignItems="center"
      >
         <img src={logo} className="App-logo" alt="logo" />
         <Paper className="mainGrid">
         <div className="abc">O Nas</div>

            <img src={mordka} className="mordka"  />
            <p className="text">Nazywam się Maria Praxmayer i jestem korepetytorką od ponad 4 lat.
            Na ich przestrzeni wiele zmieniło się w moim życiu - kiedy zaczynałam uczyć, sama uczyłam się na profilu
            hiszpańskojęzycznym w Gimnazjum nr 2 im. Adama Mickiewicza w Krakowie i byłam przyboczną zuchową w
            fantastycznej 20 Krakowskiej Gromadzie Zuchenek ,,Kubusie Puchatki". Poźniej uczyłam się w II Liceum
            Ogólnokształcącym im. Króla Jana III Sobieskiego w Krakowie na profilu matematyczno-fizyczno-angielskim z
            matematyką akademicką. W międzyczasie zmieniłam pole działania wolontaryjnego na Akademię Przyszłości, gdzie
            nauczyłam się, jak lepiej prowadzić pracę indywidualną z dzieckiem.
            Rok 2020 dla mnie okazał się być czasem rozwoju - w tym trudnym okresie miałam okazję zdawać maturę (z
            bardzo dobrymi wynikami), ukończyć kurs języka hiszpańskiego na poziomie B2 (wyższy średniozaawansowany)
            oraz uzyskać renomowany certyfikat znajomości języka angielskiego IELTS na poziomie C1. Obecnie rozpoczęłam
            studia na Glasgow Caledonian University w Szkocji na kierunku Psychologia Stosowana oraz (ukłony dla nauki
            zdalnej, która to umożliwiła) studia matematyczne na Uniwersytecie Jagiellońskim. W ten sposób realizuję
            dwie z moich pasji - trzecią jest nauczanie. </p>
         </Paper>
      </Grid>
   }

   function Contact() {
      return <Grid
         container
         direction="column"
         justify="center"
         alignItems="center"
      >
         <img src={logo} className="App-logo" alt="logo" />
         <Paper className="mainGrid">
            <h2>Contact</h2>
         </Paper>
      </Grid>;
   }

   function Offera() {

      return <Grid className="mainGrid"
                   container
                   direction="column"
                   justify="center"
                   alignItems="center"
      >
         <img src={logo} className="App-logo" alt="logo" />
         <Paper className="mainGrid">
            <Offer />
         </Paper>
      </Grid>
   }
}