import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list'; 



export default function http() {
    return(
       <div>
          <Card>
       <CardPrimaryAction>
      
      <div style={{ padding: '1rem' }}>
        <Typography use="headline5" tag="div">
        HTTP: HyperText Transfer Protocol
        is an application-layer protocol for transmitting hypermedia documents, such as HTML.
        It was designed for communication between web browsers and web servers
        </Typography>

        <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
        As long as a file is in the proper directory and readable, the HTTP server will serve it
        Many admins make backups of their webfiles in zip’s or a new folder, failing to realize an attacker can scout for these
        We will place a flag in a backup directory for players to find using tools to help them.

        </Typography>
 
        <Typography use="body2" tag="p" theme="textSecondaryOnBackground">
        It is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.
         A complete document is reconstructed from the different sub-documents fetched, 
         for instance text, layout description, images, videos, scripts, and more.
         </Typography>

         </div>
        
         </CardPrimaryAction>
        
         </Card>
        
         <List> 
     
      <p2> Lets Try and get into an HTTP </p2>

      <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon=">>"
        text="Step 1: Run the following command: dirb http://<webserver>."
      
      />
    }

    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
 <SimpleListItem text="Dirb stands for directory buster, it searches for possible web addresses that arent explicitly shown by website. " />
  
  </CollapsibleList>

  <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon=">>"
        text="Step 2: Look for any suspicious directories in the dirb results, in our example you should see a /backup folder."
      />
    }

    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text="Download the file" />
  
     </CollapsibleList>
      
     <CollapsibleList
      handle={
        <SimpleListItem
        text="Step 3: Download the backup.zip file from the webserver."
      />
    }
  >  
    </CollapsibleList>

    <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon=">>"
        text="Step 4: Extract the backup.zip file from the webserver."
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text=" Use Cat command " />
  
     </CollapsibleList>


    
    <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon=">>"
        text="Step 5: View the source code you have extracted, this can be done using the basic cat command located in the help section."
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text=" Check the basic commands tab to open the file on your computer." />
       
     </CollapsibleList>



</List>
</div>

    )}
    
