import Link from 'next/link'
import {Card, CardPrimaryAction,CardMedia,CardActions, CardActionButton, CardActionButtons, CardActionIcons,CardActionIcon } from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList,SimpleListItem} from '@rmwc/list';

export default function home() {

    return(
      <> 
      <div>
        <Card>
           <CardPrimaryAction>
           <div style={{ padding: '1rem' }}>
              <Typography use="headline5" tag="div">
                 <h1 id = " welcome"> WELCOME TO THE BOX </h1>
                 
              </Typography>
          <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
              <p1> 
              The goal of our project is to create and environment for students to learn the concepts of penetration testing using basic linux commands.  <br/>
              There are two parts to this application, the raspberry pi and this website with the instructions to solve each task. 
              </p1> 
            
          </Typography>
          </div>
           </CardPrimaryAction>
        </Card>
     
      </div>


      <div id = "devInfo"> 
      
      <Card style={{ width: '21rem' }}>
  <CardPrimaryAction>
    <CardMedia
      sixteenByNine
      style={{
        backgroundImage: 'url(https://i.imgur.com/wSdV47C.png)' 
      }}
    />
    <div style={{ padding: '0 1rem 1rem 1rem' }}>
      <Typography use="headline6" tag="h2">
        Mustak Ahmed
      </Typography>
      <Typography
        use="subtitle2"
        tag="h3"
        theme="textSecondaryOnBackground"
        style={{ marginTop: '-1rem' }}
      >
    
      </Typography>
      <Typography
        use="body1"
        tag="div"
        theme="textSecondaryOnBackground"
      >
        
      </Typography>
    </div>
  </CardPrimaryAction>
  <CardActions>
    <CardActionButtons>
      <CardActionButton>github</CardActionButton>
      <CardActionButton>email</CardActionButton>
    </CardActionButtons>
  
  </CardActions>
</Card>
      
      
      
      
      
      
      </div>
     
     
     
      </>
    )    
    
   

  }
  