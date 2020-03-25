import Link from 'next/link' 
import {List, SimpleListItem}  from '@rmwc/list';

export default function basicCommands() {

    return(
<> 
<List twoLines>

<h1 id ="header2"> The spaces between are important, if there is a space, the command in linux will have a space, for example:cd directory would be written as " cd newfolder " </h1> 

<SimpleListItem
    text= "ls : List all files in current directory, you can add -l places the files in list format, -a lists all files including hidden ones."
/>

<SimpleListItem
    text="pwd :      This gives you the absolute path, Helpful for knowing where you currently are."
/>
 
<SimpleListItem
    text=" cd <directory> : To change the current directory"
/> 

<SimpleListItem
    text=" cat <file>: Outputs the conetents of a file"
/>
<SimpleListItem
    text=" nano <file>: Opens the file with a text editor, the save and exit commands are loated at the bottom"
/>

<SimpleListItem
    text="less <file> : Opens the file but you cannot modify the file. you can only view it"
/>

<SimpleListItem
    text="mkdir <name>: Creates a folder with that name in the current directory"
/>

<SimpleListItem
    text="mv <file> <destination>:  Moves the specified file to the specified destination"
/>
<SimpleListItem
    text="cp <file> <destination>:  Copies the specified file to the specified destination, to copy folders add -r to the command "
/>
<SimpleListItem
    text="rm <file>:  Removes the specified file, adding -f forces the file to delete, adding -r to remove entire folders"
/>
<SimpleListItem
    text="man <cmd> : lists the documnetation of command, useful to see what a command does if you forget"
/>
<SimpleListItem
    text="clear :   Clears the terminal"
/>
<SimpleListItem
    text="history :Shows past commands you ran"
/>


</List>

</>
 


    )    
    
   

  }
  
  
