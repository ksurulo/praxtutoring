import Grid from '@material-ui/core/Grid';
import logo from '../images/zeszyt_resized.jpg';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import ContactRecord from './ContactRecord.js';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
            icon={<PhoneIcon fontSize="medium" />}
            title="123456789"
         />

         <ContactRecord
            icon={<PhoneIcon className='hidden' fontSize="medium" />}
            title="123456789"
         />
         <br />
         <br />
         <ContactRecord
            icon={<EmailIcon fontSize="medium" />}
            title="krzysztof@praxtutoring.com"
         />
         <ContactRecord
            icon={<Hidden><EmailIcon className='hidden' fontSize="medium" /></Hidden>}
            title="maria@praxtutoring.com"
         />
         <ContactRecord
            icon={<EmailIcon className='hidden' fontSize="medium" />}
            title="korepetycje@praxtutoring.com"
         />
         <br />
         <br />
         <ContactRecord
            icon={<LinkedInIcon fontSize="medium" />}
            title="https://www.linkedin.com/in/maria-praxmayer-37b5a9177/"
         />
         <ContactRecord
            icon={<LinkedInIcon  className='hidden' fontSize="medium" />}
            title="https://www.linkedin.com/in/krzysztof-surulo/"
         />

      </Paper>
   </Grid>;
}