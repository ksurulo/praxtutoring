import Grid from '@material-ui/core/Grid';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

import '../App.css';
import logo from '../images/zeszyt_resized.jpg';
import {OfferTable} from './Table';


export function Offer() {

   const initial_state = 'Wybierz poziom nauczania'
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const [offerButtonText, setOfferButtonText] = React.useState(initial_state);
   const [rows, setRows] = React.useState([]);
   const [titles, setTitles] = React.useState([]);


   const small_children = 'Nauczanie początkowe (klasy 1-3)'
   const children = 'Szkoła podstawowa 4-8'
   const teens = 'Szkoły ponadpodstawowe'
   const exams = 'Przygotowania do egzaminów'

   function createData(name, price) {
      return {name, price};
   }

   function createDataWithAddedColumn(name, price, price2) {
      return {name, price, price2};
   }

   const getRows = (text) => {
      if (text === small_children) {
         return [
            createData('Czytanie i pisanie', 35),
            createData('Matematyka', 35),
            createData('Język angielski', 35),
            createData('Programowanie dla dzieci', 50)
         ];
      } else if (text === children) {
         return [
            createData('Matematyka', 40),
            createData('Przyroda', 40),
            createData('Fizyka', 40),
            createData('Język angielski', 40),
            createData('Wstęp do programowania', 50),
            createData('Tworzenie aplikacji mobilnych (Android)', 60),
            createData('Tworzenie stron internetowych', 60)
         ];
      } else if (text === teens) {
         return [
            createData('Matematyka poziom podstawowy', 45),
            createData('Język angielski poziom podstawowy', 45),
            createData('Fizyka poziom podstawowy', 45),
            createData('Matematyka poziom rozszerzony', 50),
            createData('Język angielski poziom rozszerzony', 50),
            createData('Fizyka poziom rozszerzony', 50),
            createData('Wstęp do programowania', 50),
            createData('Tworzenie aplikacji mobilnych (Android)', 60),
            createData('Tworzenie stron internetowych', 60)

         ];
      } else if (text === exams) {
         return [
            createDataWithAddedColumn('Egzamin ośmioklasisty - Matematyka', 45, '-'),
            createDataWithAddedColumn('Egzamin ośmioklasisty - Angielski', 45, '-'),
            createDataWithAddedColumn('Kursy maturalne - Matematyka poziom podstawowy', 50, 70),
            createDataWithAddedColumn('Kursy maturalne - Angielski poziom podstawowy', 50, 70),
            createDataWithAddedColumn('Kursy maturalne - Matematyka poziom rozszerzony', 55, 75),
            createDataWithAddedColumn('Kursy maturalne - Angielski poziom rozszerzony', 55, 75)
         ];
      } else {
         return [];
      }
   }

   const getTitles = (text) => {
      if (text === small_children) {
         return [
            'Przedmiot',
            'Cena za 45 minut'
         ];
      } else if (text === children) {
         return [
            'Przedmiot',
            'Cena za 60 minut'
         ];
      } else if (text === teens) {
         return [
            'Przedmiot',
            'Cena za 60 minut'
         ];
      } else if (text === exams) {
         return [
            'Przedmiot',
            'Cena za 60 minut',
            'Cena za 90 minut'
         ];
      } else {
         return [];
      }
   }

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };


   const handleClose = (text) => {

      if (typeof text === 'string') {
         setOfferButtonText(text)
         setRows(getRows(text));
         setTitles(getTitles(text));
      } else {
         setOfferButtonText(initial_state)
         setRows(getRows(text));
         setTitles(getTitles(text));
      }
      setAnchorEl(null);
   };
   return (
      <Grid
         container
         direction="column"
         justify="center"
         alignItems="center"
      >
         <img src={logo} className="App-logo" alt="logo" />
         <Paper className="mainPaper">
            <div className="subtitle">Oferta</div>
            {offerButtonText !== initial_state ? null :
               <div className={'offerText'}>
                  <p className="text">Oferujemy szeroką gamę zajęć na każdym poziomie nauczania i poza nimi - pracę nad
                     bieżącym materiałem, przygotowania do egzaminów oraz indywidualne kursy umiejętności.
                  </p>
                  <p className="text">
                     Wybierz kategorię, która Cię interesuje i zacznij swoją przygodę z nauką!
                  </p>
                  <p className="text"> Ceny są poglądowe, dokładne będą ustalane po indywidualnej rozmowie z
                     prowadzącą/-ym.</p>
               </div>}
               <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
               {offerButtonText}
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
               <MenuItem onClick={() => handleClose(exams)}>{exams}</MenuItem>
               </Menu>
               <br />
               <br />
               <OfferTable rows={rows} titles={titles} />
               </Paper>
               </Grid>
               );
               }