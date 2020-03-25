import Link from 'next/link'
import Link from 'next/link'
import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';  
import {Icon, metaIcon } from '@rmwc/icon';

export default function ssh() {
    return(
      <>
      <Card> 
        <CardPrimaryAction>
          <div style={{ padding: '1rem' }}>
            <Typography use="headline5" tag="div">
              SSH
            </Typography>
            <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
              Secure Shell or SSH for short is a software package that enables secure system administration and file transer over insecure networks. It is used nearly in 
              every datacenter and large enterprise. 
            </Typography>
      </div>
      </CardPrimaryAction>
    </Card>

      </>
      
      
      
    )    
    
   

  }
