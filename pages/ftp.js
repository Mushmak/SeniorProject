import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';  
import {Icon, metaIcon } from '@rmwc/icon'; 



export default function ftp() {



  
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
      <p2> Lets Try and get into an unsecure FTP </p2>
        
      <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon={{ icon: 'https://i.imgur.com/GeMFPpz.png?1', strategy: 'url' }}
        text="Step 1: Attempt to connect to the FTP server."
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text="This can be done using the linux command ftp -p <ip address> " />
  
     </CollapsibleList>

     <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon={{ icon: 'https://i.imgur.com/GeMFPpz.png?1', strategy: 'url' }}
        text="Step 2: If you are asked for a username, try any username. If you are asked for a password, try any password."
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
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
        metaIcon={{ icon: 'https://i.imgur.com/GeMFPpz.png?1', strategy: 'url' }}
        text="Step 4: Try to connect to the FTP again"
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text=" This can be done using the linux command ftp -p <ip address> " />
  
     </CollapsibleList>



    
    <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon={{ icon: 'https://i.imgur.com/GeMFPpz.png?1', strategy: 'url' }}
        text="Step 5: This time use ''anonymous'' or ''ftp'' as username, and leave the password empty"
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text=" You should have successfully loged in" />
       
     </CollapsibleList>

     <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon={{ icon: 'https://i.imgur.com/GeMFPpz.png?1', strategy: 'url' }}
        text="Step 6: Look at all the files in the server"
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text=" This can be done using the ''ls'' command " />
       
     </CollapsibleList>

    
     <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon={{ icon: 'https://i.imgur.com/GeMFPpz.png?1', strategy: 'url' }}
        text="Step 7: Once you have the files listed, look for an suspicious files. Attempt to get the file from the server"
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text=" This can be done using the ''get <filename>'' command " />
       
     </CollapsibleList>

     
     <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon={{ icon: 'https://i.imgur.com/GeMFPpz.png?1', strategy: 'url' }}
        text="Step 8: Once you have gotten the file, use the ''exit'' command and view the file on your local computer"
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text=" check the basic commands tab to how to open the file on your computer " />

     <SimpleListItem text=" (the user would enter the code the found here)" />   
    
     </CollapsibleList>

    


    </List>

    

      </>
          
    )    
    
   

  }
  
  
