import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';  
import {Icon, metaIcon } from '@rmwc/icon';

export default function postgres() {
    return(

    <Card> 
    <CardPrimaryAction>
    <div style={{ padding: '1rem' }}>
        <Typography use="headline5" tag="div">
          Postgres or PostgreSQL
        </Typography>
        <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
        PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language
        combined with many features that safely store and scale the most complicated data workloads. PostgreSQL runs on all major operating systems.
        PostgreSQL comes with many features aimed to help developers build applications, administrators to protect data integrity and build fault-tolerant 
        environments, and help you manage your data no matter how big or small the dataset. In addition to being free and open source, PostgreSQL is highly 
        extensible. For example, you can define your own data types, build out custom functions, even write code from different programming languages without
        recompiling your database. (source: https://www.postgresql.org/about/)
        </Typography>
      </div>
    </CardPrimaryAction>

    <p2>Trying to connect to unsecure Postgres</p2>

    <CollapsibleList
      handle={
      <SimpleListItem
        metaIcon={{ icon: "https://jdbc.postgresql.org/", strategy: 'url' }}
        text="Step 1: Attempt to connect to the Postgres server."
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
      <SimpleListItem text="This can be done using the linux command 'psql -U postgres'" />
  
    </CollapsibleList>

    <CollapsibleList
      handle={
      <SimpleListItem
        metaIcon={{ icon: "https://jdbc.postgresql.org/", strategy: 'url' }}
        text="Step 2: When prompted for a password, enter the default password 'postgres'."
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text=" " />
  
    </CollapsibleList>


    <CollapsibleList
      handle={
      <SimpleListItem
        text="Step 3: Type '\dt' to view all tables, save the name of the any suspicious tables you see for later"
      />
    }
  >  
    </CollapsibleList>


    <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon={{ icon: "https://jdbc.postgresql.org/", strategy: 'url' }}
        text="Step 4: Run a SQL query from the table by typing the following: 'SELECT * FROM <table_name>;'"
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text= "This can be done using 'SELCT * FROM <table_name>" />
  
     </CollapsibleList>


     <CollapsibleList
      handle={
        <SimpleListItem
        metaIcon={{ icon: "https://jdbc.postgresql.org/", strategy: 'url' }}
        text="Step 5: Find the flag in the resulting query"
      />
    }
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
     <SimpleListItem text= "This can be done using -h or --help depending on your psql version" /> // I'm actually not sure of this
  
     </CollapsibleList>  
    )  
    </Card> 
    ) 
  }

