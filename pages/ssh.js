import {Card, CardPrimaryAction} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {List, CollapsibleList, SimpleListItem} from '@rmwc/list';

export default function ssh() {
    return (
        <>
            <Card>
                <CardPrimaryAction>
                    <div style={{padding: '1rem'}}>
                        <Typography use="headline5" tag="div">
                            SSH: Secure Shell Protocol
                        </Typography>
                        <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
                            Secure Shell Protocol (SSH) is a method for secure remote login from one computer to
                            another.
                            It provides options for strong authentication, security, and integrity with strong
                            encryption by
                            using SSH keys. SSH keys always come in pairs, and each pair is made up of a private key and
                            a public
                            key. These keys are used to encrypt any data that is being transmitted across a network.
                        </Typography>
                    </div>
                </CardPrimaryAction>

            </Card>

            <List>
                <p2> Lets begin and get into an SSH exercise</p2>

                <CollapsibleList
                    handle={
                        <SimpleListItem
                            metaIcon=">>"
                            text="Step 1: Download the following file:"
                        />
                    }
                    onOpen={() => console.log('open')}
                    onClose={() => console.log('close')}
                >
                    <SimpleListItem>
                        <a href={"/downloads/id_rsa"}>Click here download the required file</a>
                    </SimpleListItem>

                </CollapsibleList>

                <CollapsibleList
                    handle={
                        <SimpleListItem
                            metaIcon=">>"
                            text="Step 2: Type the following command to properly set permissions for the key:"
                        />
                    }
                    onOpen={() => console.log('open')}
                    onClose={() => console.log('close')}
                >
                    <SimpleListItem text="chmod 600 </path/to/downloaded/file>"/>

                </CollapsibleList>

                <CollapsibleList
                    handle={
                        <SimpleListItem
                            metaIcon=">>"
                            text="Step 3: Type the following command to use the key to SSH in:"
                        />
                    }
                >
                    <SimpleListItem text="ssh -i </path/to/downloaded/file> baduser@<hostname>"/>
                </CollapsibleList>
            </List>
        </>
    )
}