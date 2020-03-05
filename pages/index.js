import Link from 'next/link'

import { Button } from '@rmwc/button';
import { ThemeProvider} from '@rmwc/theme'; 
import Router from 'next/router';
import React, { useEffect } from "react";


function HomePage() {

  useEffect(() => {
    const {pathname} = Router
  
        Router.replace('/home')
  });

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