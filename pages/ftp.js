import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';  
import {Icon, metaIcon } from '@rmwc/icon'; 
import {TextField} from '@rmwc/textfield'; 
import { Button } from '@rmwc/button';

import {useContext} from 'react';  
import { CheckboxContenxt} from './_app'; 

export default function ftp() {
  const setcheckbox= useContext(CheckboxContenxt);  
  function  checkCode(code){

    if(code == "91be5a2819328d0c3884d3788b7b961c"){
        setcheckbox('ftp'); 
    }
    else 
    {
        alert("Code is incorrect")
    }

  }
  
    return(
      <>
    <Card> 
    <CardPrimaryAction>
      <div style={{ padding: '1rem' }}>
        <Typography use="headline5" tag="div">
          FTP: File Transfer Protocal
        </Typography>
        <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
         FTP is a way to transfer files online. FTP is a useful tool for mobing information from your computer to a server. FTP connections can have an active and passive mode. 
         Active modes are common and allows open communication between the server and device. With Active mode the server takes the active role in establishing the connection by 
         approving requests. In the passive mode, the server doesn't actively maintain the connections but still pays attention to what is happening. FTP is not secure by desgin, this means 
         the files are not encrpyted so if you're able to you can intercept files.
        </Typography>
    </div>
  </CardPrimaryAction>
   
    </Card>  
    
    <List>
      <p> Lets Try and get into an unsecure FTP </p>
        
      <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon = '/images/chevron_right.png '
        // metaIcon={{ icon: 'https://i.imgur.com/GeMFPpz.png?1', strategy: 'url' }}
        text="Step 1: Attempt to connect to the FTP server."
      />
    }
  >
     <SimpleListItem text="This can be done using the linux command ftp -p <ip address> " />
  
     </CollapsibleList>

     <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon = '/images/chevron_right.png '
        text="Step 2: If you are asked for a username, try any username. If you are asked for a password, try any password."
      />
    }
  >
     <SimpleListItem text="You should notice that the log in failed. It wants a valid password and username which we dont know. " />
  
     </CollapsibleList>

     <CollapsibleList
      handle={
        <SimpleListItem
        text="Step 3: Typed Exit to return to the command prompt"
      />
    }
  >  
    </CollapsibleList>

    <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon = '/images/chevron_right.png '
        text="Step 4: Try to connect to the FTP again"
      />
    }
  >
     <SimpleListItem text=" This can be done using the linux command ftp -p <ip address> " />
  
     </CollapsibleList>
    
    <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon = '/images/chevron_right.png '
        text="Step 5: This time use ''anonymous'' or ''ftp'' as username, and leave the password empty"
      />
    }
  >
     <SimpleListItem text=" You should have successfully loged in" />
       
     </CollapsibleList>

     <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon = '/images/chevron_right.png '
        text="Step 6: Look at all the files in the server"
      />
    }
  >
     <SimpleListItem text=" This can be done using the ''ls'' command " />
       
     </CollapsibleList>

    
     <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon = '/images/chevron_right.png '
        text="Step 7: Once you have the files listed, look for an suspicious files. Attempt to get the file from the server"
      />
    }
  >
     <SimpleListItem text=" This can be done using the ''get <filename>'' command " />
       
     </CollapsibleList>

     
     <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon = '/images/chevron_right.png '
        text="Step 8: Once you have gotten the file, use the ''exit'' command and view the file on your local computer"
      />
    }
  >
     <SimpleListItem text=" check the basic commands tab to how to open the file on your computer " />
    
     </CollapsibleList> 


    </List>

    <div className="flagCode">
            <TextField id = "code" label = "Flag Code" style={{ width: '20%' ,background: 'lightblue'}} />
            <Button label="Submit"  unelevated  style={{background:'White' , color:'black', height: '40px', width: '40px'}} 
             onClick={() => checkCode(document.getElementById("code").value)} />
         
    </div>

    

      </>
          
    )    
    
   

  }
  
  
