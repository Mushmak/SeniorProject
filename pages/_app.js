import Link from 'next/link'


import '@material/button/dist/mdc.button.css';
import '@material/theme/dist/mdc.theme.css'; 
import { ThemeProvider } from '@rmwc/theme';
import { Button  } from '@rmwc/button';
import '@material/list/dist/mdc.list.css';
import '@material/card/dist/mdc.card.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@rmwc/list/collapsible-list.css';
import '@rmwc/icon/icon.css';
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/ripple/dist/mdc.ripple.css';
import {Checkbox} from '@rmwc/checkbox'; 
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@rmwc/icon/icon.css';
import '../style.css'

import React, { useEffect } from "react"; 

export const CheckboxContenxt = React.createContext({})

const defaultcheckboxes = {
ftp: false,
http: false,
ssh: false,
postgress: false,
php: false,
cron: false,
sudo: false

}

function MyApp({ Component, pageProps}) {
  
  const[checked,setChecked] = React.useState({...defaultcheckboxes}); 

  const checkAbox  = (name) => {
    setChecked(current => {
      const clonesState = {...current }
      clonesState[name] = true
      return clonesState
    })
  }
    return (
      
      <>
      <CheckboxContenxt.Provider value = {checkAbox}> 
      <ThemeProvider
      options={{
        primary: 'lightpink',
        secondary: 'lightblue',
        onPrimary: 'blue',
        textPrimaryOnBackground: 'black'
      }}
        >        
      <div className = "header">  

      <Button 
     //   label = "Home"
        theme="primary"> 
          <Link href ="/home"> 
            <a> home </a> 
          </Link> 
      </Button> 
      
      <Button 
      //  Label = "ftp"
        theme="primary"> 
        <Link href ="/ftp"> 
          <a> ftp </a> 
        </Link>
      </Button> 

      <Button 
       // label = "http"
        theme="primary"> 
        <Link href ="/http"> 
          <a> http </a> 
        </Link>  
      </Button> 
      
      <Button 
       // Label = "ssh"
        theme="primary"> 
        <Link href ="/ssh"> 
          <a> ssh </a> 
        </Link>  
      </Button> 
    

      <Button 
     //   Label = "postgres"
        theme="primary"> 
        <Link href ="/postgres"> 
         <a> postgres </a> 
        </Link>  
      </Button> 

      <Button 
     //   Label ="php"
        theme ="primary">
          <Link href = "/php"> 
            <a> PHP </a>
          </Link>     
      </Button> 

      <Button 
      //  Label = "CRON"
        theme="primary"> 
        <Link href ="/cron"> 
         <a> CRON </a> 
        </Link>  
      </Button>

      <Button 
      //  Label = "SUDO"
        theme="primary"> 
        <Link href ="/sudo"> 
         <a> SUDO </a> 
        </Link>  
      </Button>

      <Button 
     //   Label = "help"
        theme="primary"> 
        <Link href ="/basicCommands"> 
         <a> Basic Commands </a> 
        </Link>  
      </Button> 

   
      <div className="flags">
        <Checkbox
        label = "FTP"
        name = 'ftp'
        checked={checked.ftp}
       /> 

        <Checkbox
        label = "HTTP"
        name = 'htp'
        checked={checked.http}
        /> 

        <Checkbox
        label = "SSH"
        name = 'ssh'
        checked={checked.ssh}
        /> 

        <Checkbox
        label = "POSTGRESS"
        name = 'postgress'
        checked={checked.postgress}
        /> 

        <Checkbox
        label = "PHP"
        name = 'php'
        checked={checked.php}
        /> 

        <Checkbox
        label = "CRON"
        name = 'cron'
        checked={checked.cron}
        /> 
        
        <Checkbox
        label = "SUDO"
        name = 'sudo'
        checked={checked.sudo} 
        />
       

  

      </div>
      <div className = "clearb">
        
      <Button className =" clearbtn"
          Label = "clear"
          theme = "primary"
          onClick = { () => setChecked(defaultcheckboxes)} > 
          Clear 

        </Button>

      </div>


      </div>
    
   
      

   
              
        
        <div id = "content "> 
  

        <Component {...pageProps}></Component>

        </div>

        </ThemeProvider>
        </CheckboxContenxt.Provider>
    </>
    
    
    
    )}
  
  export default MyApp
