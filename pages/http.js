
import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';  
import {Icon, metaIcon } from '@rmwc/icon';
import {TextField} from '@rmwc/textfield'; 
import { Button } from '@rmwc/button';

import {useContext} from 'react';  
import { CheckboxContenxt} from './_app'; 

export default function http() {
  const setcheckbox= useContext(CheckboxContenxt);  
  function  checkCode(code){

    if(code == "7f341c22d4ef8be38536b79964eaf78a "){
        setcheckbox('http')
    }
    else 
    {
        alert("Code is incorrect")
    }
  }

    return(
    
    <>

    <div className="flagCode">
      <TextField id = "code" label = "Flag Code" style={{ width: '20%' ,background: 'lightblue'}} />
      <Button label="Submit"  unelevated  style={{background:'White' , color:'black', height: '40px', width: '40px'}} 
      onClick={() => checkCode(document.getElementById("code").value)} />

    </div>
    </>
    )    
    
   

  }
