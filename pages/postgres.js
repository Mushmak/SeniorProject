import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list'; 


export default function postgres() {
    return(
       <div>
          <Card>
       <CardPrimaryAction>
      
      <div style={{ padding: '1rem' }}>
        <Typography use="headline5" tag="div">
        PostgreSQL is a general purpose and object-relational database management system, 
        the most advanced open source database system. 
        </Typography>

        <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
        Many PostgreSQL installs come with a default user/password combination. 
        This is usually postgres/postgres. The unfortunate part is that this user has rights to every database by default. 
         

        </Typography>
 
        <Typography use="body2" tag="p" theme="textSecondaryOnBackground">
        If admins aren’t wary of this, they may accidently leave their entire database open for the picking. 
        We will leave a flag in the database for the user to retrieve with a default user/password.
         </Typography>

         </div>
        
         </CardPrimaryAction>
        
         </Card>
        
         <List> 
     
      <p2> Lets Try and get into an Postgres </p2>

      <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon=">>"
        text="Step 1: Type the following to connect to the postgres instance:"
      
      />
    }

    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
 <SimpleListItem text="psql -h <hostname> -U postgres " />
  
  </CollapsibleList>

  <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon=">>"
        text="Step 2: When prompted for a password, enter the default password"
      />
    }

    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text="postgres" />
  
     </CollapsibleList>
      
     <CollapsibleList
      handle={
        <SimpleListItem
        text="Step 3:  Type \dt to view all tables, save the name of the any suspicious tables you see for later"
      />
    }
  >  
    </CollapsibleList>

    <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon=">>"
        text="Step 4: Run a SQL query from the table by typing the following: "
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text=" SELECT * FROM <table_name>;" />
  
     </CollapsibleList>


    
    <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon=">>"
        text="Step 5: Find the flag in the resulting query"
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
    
