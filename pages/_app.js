import Link from 'next/link'
import '../style.css'
import '@material/button/dist/mdc.button.css';

function MyApp({ Component, pageProps }) {
    return (
    
      <>
       <div id = "header">  
       <Link href ="/"> 
       <a> home </a> 
       </Link> 
    

     
      <Link href ="/ftp"> 
      <a> ftp </a> 
      </Link>
    

   
       <Link href ="/http"> 
       <a> http </a> 
       </Link>  


  
       <Link href ="/ssh"> 
       <a> ssh </a> 
       </Link> 


 
      <Link href ="/postgres"> 
      <a> postgres </a> 
      </Link> 
      </div>



              
        
        <div id = "content "> 

        <Component {...pageProps}></Component>

        </div>
    </>
    


    );
    
    
    
  }
  
  export default MyApp
