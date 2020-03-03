import Link from 'next/link'

import { Button } from '@rmwc/button';
import { ThemeProvider} from '@rmwc/theme'; 

function HomePage() {
    
  return(
    <>
    <ThemeProvider
    options={{
    primary: 'lightpink',
    secondary: 'lightblue',
    onPrimary: 'blue',
    textPrimaryOnBackground: 'black'
  }}
     >
   






     </ThemeProvider>
 

  
      </> 
    )
    
   

  }
  
  export default HomePage