import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';  
import {Icon, metaIcon } from '@rmwc/icon';
import {TextField} from '@rmwc/textfield'; 
import { Button } from '@rmwc/button';
import {useContext} from 'react';  
import { CheckboxContenxt} from './_app'; 

export default function sudo() {
   const setcheckbox= useContext(CheckboxContenxt);  
  function  checkCode(code){

    if(code == "abc"){
        setcheckbox('ff2500b003b03e466ea0c668982963e1')
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
                        SUDO
                     </Typography>
                    <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
                    SUDO is a program for unix like operating systems that allows the user to run programs with the security privileges of another user. By default it is the super user. Now that we are the bob user, we saw may try to push this further.
                    The goal is the "root" user (who has access to run any command and modify any file on the machine). Bob had mentioned the following file in his notes: "/usr/local/sbin/update_motd.sh" This file is in our default Linux path. This means we can run it without using the whole path. 

           
                 </Typography>
                </div>
            </CardPrimaryAction>
        </Card>
      
      <List>
      <p>Before starting this puzzle make sure that you have completed the previous puzzle. This puzzle uses the shell from the prevous puzzle</p>
            
            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 1: Remeber bobs notes, lets try and run something sice we are the bob user " />      
            
                }
            >         
                 <SimpleListItem text = "Run the command 'update_motd.sh ' "  /> 
                 <SimpleListItem text = "You will notice you can run the program and it asks for input, after entering this, it then fails as the bob user does not have permission to edit the /etc/motd file. " /> 
            </CollapsibleList>
              
            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 2: Lets take a closer look at update_motd.sh " />      
            
                }
            >         
                 <SimpleListItem text = "Run the command 'cat /usr/local/sbin/update_motd.sh' "  /> 
                 <SimpleListItem text = {`We should be able to see the file. It looks like this is a bash script that reads user input then outputs it to the /etc/motd file. 
                 All these values are actually bash commands! If you run them in your terminal you could get similar results to this script. That's all a bash script does.`} /> 
            </CollapsibleList> 

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 3: Lets take a closer look at update_motd.sh " />      
            
                }
            >         
                 <SimpleListItem text = "Run the command 'cat /usr/local/sbin/update_motd.sh' "  /> 
                 <SimpleListItem text = {`We should be able to see the file. It looks like this is a bash script that reads user input then outputs it to the /etc/motd file. 
                 All these values are actually bash commands! If you run them in your terminal you could get similar results to this script. That's all a bash script does.`} /> 
                 <SimpleListItem text = "Notice the line taht says: 'if eval ''echo $motd > / etc/motd''; then' this is dangerous command.    " />
            </CollapsibleList>     

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 4: Lets try and run a similar command to the one we saw in the file locally on our terminal " />      
            
                }
            >         
                 <SimpleListItem text = "Run the command 'eval ''echo test messaege > /tmp/motd'' ' "  /> 
                 <SimpleListItem text = "This command runs a command based on the string given and evaluates the success of the command. The string here simply outputs 'test message' then sends the output to the file '/tmp/motd' "/> 
            </CollapsibleList>  
            
            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 5: Lets check the file /tmp/motd we should see the message 'test message' " />      
            
                }
            >         
                 <SimpleListItem text = "Run the command 'cat /tmp/motd' "  /> 
                 <SimpleListItem text = "Let's modify this command a little bit. We will change it to the following: 'eval '' echo; vim; > /etc/motd'' ' " /> 
                 <SimpleListItem text = "What do you think will happen "  /> 
            </CollapsibleList> 

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 6: Vim should have opened up" />      
            
                }
            >    <p>  What happened here? Quite simply, bash treats the  ";" character as almost a break. This means commands can be separated with the ";" symbol. 
               If eval is treating our input as a literal string, we can execute any command we want through this command. Let's think back to the update_motd.sh script, 
               this seems to save our input into a variable named "$motd" then interprets it literally. If we modify give is a nasty input, what would happen? 
               Unfortunately, since the bob user is running the script, we can only run commands as the bob user, this doesn't help us because we can do that anyway. 
               Besides, the bob user seems to be unable to edit the /etc/motd file anyway. 
               The script always exits with a "Permission denied" what gives? This is where the "sudo" command comes into play. sudo allows you to run a command as the "root" or "superuser".
                This means for that single command, you have full privileges to do anything! Unfortunately, this permission needs to be set ahead of time by a system admin.</p>     
                 
            </CollapsibleList>

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 7: Lets check what sudo permissions we have  " />      
            
                }
            >         
                 <SimpleListItem text = "Run the command 'sudo -l"  /> 
                 <SimpleListItem text = "we see a message saying that bob may be able to run the update_motd.sh script with the sudo command... if we put everything together what does this mean? " /> 
            
            </CollapsibleList>

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 8: Let's put everything together." />      
            
                }
            >         
                 <SimpleListItem text = "First, let's run the update_motd.sh script with sudo "  /> 
                 <SimpleListItem text = " use the command  'sudo update_motd.sh "/> 
            </CollapsibleList>      
            
            <CollapsibleList
             handle ={
                <SimpleListItem
                  // metaIcon ='/images/chevron_right.png'
                   text="Step 10: When asked for the new motd, let's enter: '; bash ;' --what happened now?" />      
            
                }
            >         
                
            </CollapsibleList>  

            <CollapsibleList
             handle ={
                <SimpleListItem
                  // metaIcon ='/images/chevron_right.png'
                   text="Step 12: You should be greeted with a terminal, but its a bit different this time-- we seem to be 'root@TheBox'. Type 'whoami' to confirm you are the root user!" />      
            
                }
            >                         
            </CollapsibleList>     

            <CollapsibleList
             handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 13: Type 'cd' to go to your home directory.  After that, type 'ls'." />      
            
                }
            >  
             <SimpleListItem text = " You should see the final flag! --- Grab the final flag with 'cat FINAL_FLAG' " />             
             <p>Feel free to explore the box and change any files you want! The box should be reset after a power cycle! </p>          
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
