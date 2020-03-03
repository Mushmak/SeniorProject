import Link from 'next/link'
import '../style.css'
import '@material/button/dist/mdc.button.css';
import '@material/theme/dist/mdc.theme.css'; 
import { ThemeProvider } from '@rmwc/theme';
import { Button  } from '@rmwc/button';
import '@material/list/dist/mdc.list.css';


function MyApp({ Component, pageProps }) {
    return (
    
      <>
      <ThemeProvider 
      options={{
        primary: 'lightpink',
        secondary: 'lightblue',
        onPrimary: 'blue',
        textPrimaryOnBackground: 'black'
      }}
        >        
      <div id = "header">  

      <Button 
        Label = "Home"
        theme="primary"> 
          <Link href ="/"> 
            <a> home </a> 
          </Link> 
      </Button> 
      
      <Button 
        Label = "ftp"
        theme="primary"> 
        <Link href ="/ftp"> 
          <a> ftp </a> 
        </Link>
      </Button> 
      
      <Button 
        Label = "http"
        theme="primary"> 
        <Link href ="/http"> 
          <a> http </a> 
        </Link>  
      </Button> 
      
      <Button 
        Label = "ssh"
        theme="primary"> 
        <Link href ="/ssh"> 
          <a> ssh </a> 
        </Link>  
      </Button> 
    

      <Button 
        Label = "postgres"
        theme="primary"> 
        <Link href ="/postgres"> 
         <a> postgres </a> 
        </Link>  
      </Button> 

      <Button 
        Label = "help"
        theme="primary"> 
        <Link href ="/basicCommands"> 
         <a> Basic Commands </a> 
        </Link>  
      </Button> 

 
 
     
      </div>



              
        
        <div id = "content "> 

        <Component {...pageProps}></Component>

        </div>

        </ThemeProvider>
    </>
    


    );
    
    
    
  }
  
  export default MyApp
