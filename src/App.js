import logo from './a.jpg';
import './App.css';
import {Navigation} from './components/Navigation';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function App() {
   return (
      <Paper>
         <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
         >
            <div className="App">
               <Navigation />
               <header className="Pra(x)tutoring">
                  <img src={logo} className="App-logo" alt="logo" />
               </header>
               <body>
               <a>
                  Mój stary to fanatyk wędkarstwa. Pół mieszkania zajebane wędkami najgorsze. Średnio raz w miesiącu
                  ktoś wdepnie w leżący na ziemi haczyk czy kotwicę i trzeba wyciągać w szpitalu bo mają zadziory na
                  końcu. W swoim 22 letnim życiu już z 10 razy byłem na takim zabiegu. Tydzień temu poszedłem na jakieś
                  losowe badania to baba z recepcji jak mnie tylko zobaczyła to kazała buta ściągać xD bo myślała, że
                  znowu hak w nodze.
                  Druga połowa mieszkania zajebana Wędkarzem Polskim, Światem Wędkarza, Super Karpiem xD itp. Co tydzień
                  ojciec robi objazd po wszystkich kioskach w mieście, żeby skompletować wszystkie wędkarskie tygodniki.
                  Byłem na tyle głupi, że nauczyłem go into internety bo myślałem, że trochę pieniędzy zaoszczędzimy na
                  tych gazetkach ale teraz nie dosyć, że je kupuje to jeszcze siedzi na jakichś forach dla wędkarzy i
                  kręci gównoburze z innymi wędkarzami o najlepsze zanęty itp. Potrafi drzeć mordę do monitora albo
                  wypierdolić klawiaturę za okno. Kiedyś ojciec mnie wkurwił to założyłem tam konto i go trolowałem
                  pisząc w jego tematach jakieś losowe głupoty typu karasie jedzo guwno. Matka nie nadążała z gotowaniem
                  bigosu na uspokojenie. Aha, ma już na forum rangę SUM, za najebanie 10k postów."
                  "Jak jest ciepło to co weekend zapierdala na ryby. Od jakichś 5 lat w każdą niedzielę jem rybę na
                  obiad a ojciec pierdoli o zaletach jedzenia tego wodnego gówna. Jak się dostałem na studia to stary
                  przez tydzień pie**olił że to dzięki temu, że jem dużo ryb bo zawierają fosfor i mózg mi lepiej
                  pracuje.
                  Co sobotę budzi ze swoim znajomym mirkiem całą rodzinę o 4 w nocy bo hałasują pakując wędki, robiąc
                  kanapki itd.
                  Przy jedzeniu zawsze pierdoli o rybach i za każdym razem temat schodzi w końcu na Polski Związek
                  Wędkarski, ojciec sam się nakręca i dostaje strasznego bólu dupy durr niedostatecznie zarybiajo tylko
                  kradno hurr, robi się przy tym cały czerwony i odchodzi od stołu klnąc i idzie czytać Wielką
                  Encyklopedię Ryb Rzecznych żeby się uspokoić.
               </a>
               </body>
            </div>
         </Grid>
      </Paper>
   );
}

export default App;
