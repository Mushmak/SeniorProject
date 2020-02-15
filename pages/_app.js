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
    

     
      <Link href ="/puzzle1"> 
      <a> puzzle1 </a> 
      </Link>
    

   
       <Link href ="/puzzle2"> 
       <a> puzzle2 </a> 
       </Link>  


  
       <Link href ="/puzzle3"> 
       <a> puzzle3 </a> 
       </Link> 


 
      <Link href ="/puzzle4"> 
      <a> puzzle4 </a> 
      </Link> 
      </div>



              
        
        <div id = "content "> 

        <Component {...pageProps}></Component>

        </div>
    </>
    


    );
    
    
    
  }
  
  export default MyApp