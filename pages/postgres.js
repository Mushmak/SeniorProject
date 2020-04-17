import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';  
import {Icon, metaIcon } from '@rmwc/icon';
import {TextField} from '@rmwc/textfield'; 
import { Button } from '@rmwc/button';

export default function postgres() {
  function  checkCode(code){

    if(code == "abc"){
        console.log("good")
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
              PostgreSQL
            </Typography>
            <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
            PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language
            combined with many features that safely store and scale the most complicated data workloads. PostgreSQL runs on all major operating systems.
            PostgreSQL comes with many features aimed to help developers build applications, administrators to protect data integrity and build fault-tolerant 
            environments, and help you manage your data no matter how big or small the dataset. In addition to being free and open source, PostgreSQL is highly 
            extensible. For example, you can define your own data types, build out custom functions, even write code from different programming languages without
            recompiling your database.
            </Typography>
      </div>
      </CardPrimaryAction>
    </Card>

      <List> 
        <p2> Lets try and connect to an unsecure PostgreSQL database</p2>
        
        <CollapsibleList
          handle ={
            <SimpleListItem
            metaIcon ='/images/chevron_right.png'
            text="Step 1: Attempt to connect to the Postgree server" />
          }
        > 
            <SimpleListItem text = "this can be done using the command 'psql -h <hostname> -U postgres' " /> 
        </CollapsibleList>

        <CollapsibleList
          handle ={
            <SimpleListItem
            metaIcon ='/images/chevron_right.png'
            text="Step 2: You should be prompted for a password " />
          }
        > 
            <SimpleListItem text = "The idea is that most people forget to change the dafault password, so try 'postgres'   "  /> 
        </CollapsibleList>

        <CollapsibleList
          handle ={
            <SimpleListItem
            metaIcon ='/images/chevron_right.png'
            text="Step 3: You should have been logged into the database. Look through the database for anything suspicious " />
          }
        > 
            <SimpleListItem text = "type '\dt' to view all tables, if you see anything suspicious, take note for later  "  /> 
        </CollapsibleList>

        <CollapsibleList
          handle ={
            <SimpleListItem
            metaIcon ='/images/chevron_right.png'
            text="Step 4: Run an SQL query of the tables you see. " />
          }
        > 
            <SimpleListItem text = "If you're unfamiliar with SQL, this can be done with 'SELECT * FROM <table_name>'  "  /> 
        </CollapsibleList>

        <CollapsibleList
          handle ={
            <SimpleListItem
            metaIcon ='/images/chevron_right.png'
            text="Step 5: If done successfully you should have seen what is inside the databse " />
          }
        > 
            <SimpleListItem text = "Enter the code you found in the available slot to progress"  /> 
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