import Grid from '@material-ui/core/Grid';
import logo from '../images/zeszyt_resized.jpg';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import mordka from '../images/ryjek.jpg'
import mordka2 from '../images/moj_ryjek.jpg'

export default function About() {
   return <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
   >
      <img src={logo} className="App-logo" alt="logo" />
      <Paper className="mainPaper">
         <div className="subtitle">O Nas</div>


         <img src={mordka} className="avatar_image right" />
         <div className="subtitle2">Maria</div>
         <p className="text">Nazywam się Maria Praxmayer i jestem korepetytorką od ponad 4 lat.
            Na ich przestrzeni wiele zmieniło się w moim życiu - kiedy zaczynałam uczyć, sama uczyłam się na profilu
            hiszpańskojęzycznym w Gimnazjum nr 2 im. Adama Mickiewicza w Krakowie i byłam przyboczną zuchową w
            fantastycznej 20 Krakowskiej Gromadzie Zuchenek ,,Kubusie Puchatki". Poźniej uczyłam się w II Liceum
            Ogólnokształcącym im. Króla Jana III Sobieskiego w Krakowie na profilu matematyczno-fizyczno-angielskim z
            matematyką akademicką. W międzyczasie zmieniłam pole działania wolontaryjnego na Akademię Przyszłości,
            gdzie</p>

         <div className="right">
            <img src={mordka2} className="avatar_image left" />
            <div className="subtitle2">Krzysztof</div>
            <p className="text">Nazywam się Maria Praxmayer i jestem korepetytorką od ponad 4 lat.
               Na ich przestrzeni wiele zmieniło się w moim życiu - kiedy zaczynałam uczyć, sama uczyłam się na profilu
               hiszpańskojęzycznym w Gimnazjum nr 2 im. Adama Mickiewicza w Krakowie i byłam przyboczną zuchową w
               fantastycznej 20 Krakowskiej Gromadzie Zuchenek ,,Kubusie Puchatki". Poźniej uczyłam się w II Liceum
               Ogólnokształcącym im. Króla Jana III Sobieskiego w Krakowie na profilu matematyczno-fizyczno-angielskim z
               matematyką akademicką. W międzyczasie zmieniłam pole działania wolontaryjnego na Akademię Przyszłości,
               gdzie.</p>
         </div>
      </Paper>
   </Grid>
}