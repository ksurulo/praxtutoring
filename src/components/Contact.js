import Grid from '@material-ui/core/Grid';
import logo from '../images/zeszyt_resized.jpg';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import ContactRecord from './ContactRecord.js';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Hidden from '@material-ui/core/Hidden';

export default function Contact() {
   return <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
   >
      <img src={logo} className="App-logo" alt="logo" />
      <Paper className="mainPaper">
         <div className="subtitle">Kontakt</div>

         <ContactRecord
            icon={<Hidden><EmailIcon fontSize="medium" /></Hidden>}
            title="maria@praxtutoring.com"
         />
         <ContactRecord
            icon={<PhoneIcon fontSize="medium" />}
            title="662-592-948"
         />

         <br />
         <br />
         <ContactRecord
            icon={<EmailIcon fontSize="medium" />}
            title="krzysztof@praxtutoring.com"
         />
         <ContactRecord
            icon={<PhoneIcon fontSize="medium" />}
            title="792-043-848"
         />

         <br />
         <br />

      </Paper>
   </Grid>;
}