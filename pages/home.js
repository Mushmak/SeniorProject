import Link from 'next/link'
import { Card, CardPrimaryAction, CardMedia, CardActions, CardActionButton, CardActionButtons, CardActionIcons, CardActionIcon } from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { List, CollapsibleList, SimpleListItem } from '@rmwc/list';

export default function home() {

  function openGit(x) {
    window.open(x);
  }

  return (
    <>
      <div>
        <Card>
          <CardPrimaryAction>
            <div style={{ padding: '1rem' }}>
              <Typography use="headline5" tag="div">
                <h1 id="welcome"> WELCOME TO THE BOX </h1>
              </Typography>
              <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
                <p1 id="explain">
                  The goal of this project is to create an informational game to benefit students with an interest in security and exploitation of software.
                  Many students, both graduate and undergraduate, have shown an interest in understanding proper security practices and the repercussions of misconfigured software.
                  Unfortunately, these students feel overwhelmed by the field and are unsure where to start their learning endeavors.
                  With our project, we wish to create a step by step approach that will explain vulnerabilities and misconfigurations of common services,
                   propose a challenge to intermediate users already familiar with these concepts, and allow anyone to play the game without fear as it will reset itself to a solvable state after each attempt.
                </p1>
              </Typography>
            </div>
          </CardPrimaryAction>
        </Card>

      </div>

      <div className="card-group">
        <div id="devInfo">
          <Card id="one" style={{ width: '21rem' }}>
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
                <CardActionButton onClick={() => openGit("https://github.com/mushmak")} > github</CardActionButton>
                <CardActionButton>email</CardActionButton>
              </CardActionButtons>

            </CardActions>
          </Card>
          </div>

          <div id="devInfo2">
          <Card id="one" style={{ width: '21rem' }}>
            <CardPrimaryAction>
              <CardMedia
                sixteenByNine
                style={{
                  backgroundImage: 'url(https://i.imgur.com/wSdV47C.png)'
                }}
              />
              <div style={{ padding: '0 1rem 1rem 1rem' }}>
                <Typography use="headline6" tag="h2">
                  Armaan Esfahani
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
                <CardActionButton onClick={() => openGit("https://github.com/armaanaki")} > github</CardActionButton>
                <CardActionButton>email</CardActionButton>
              </CardActionButtons>

            </CardActions>
          </Card>
          </div>
        
          <div id="devInfo3">
            <Card id="two" style={{ width: '21rem' }}>
              <CardPrimaryAction>
                <CardMedia
                  sixteenByNine
                  style={{
                   backgroundImage: 'url(https://i.imgur.com/wSdV47C.png)'
                  }}
                />
                <div style={{ padding: '0 1rem 1rem 1rem' }}>
                  <Typography use="headline6" tag="h2">
                    John Martinez
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
                  <CardActionButton onClick={() => openGit("https://github.com/JohnMart1218")} > github</CardActionButton>
                  <CardActionButton>email</CardActionButton>
                </CardActionButtons>

              </CardActions>
            </Card>
          </div>

          <div id="devInfo4">
            <Card id="two" style={{ width: '21rem' }}>
              <CardPrimaryAction>
                <CardMedia
                  sixteenByNine
                  style={{
                   backgroundImage: 'url(https://i.imgur.com/wSdV47C.png)'
                  }}
                />
                <div style={{ padding: '0 1rem 1rem 1rem' }}>
                  <Typography use="headline6" tag="h2">
                    Pratyush Siddi
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
                  <CardActionButton onClick={() => openGit("https://github.com/siddi95")} > github</CardActionButton>
                  <CardActionButton>email</CardActionButton>
                </CardActionButtons>

              </CardActions>
            </Card>
          </div>

          <div id="devInfo5">
            <Card id="two" style={{ width: '21rem' }}>
              <CardPrimaryAction>
                <CardMedia
                  sixteenByNine
                  style={{
                   backgroundImage: 'url(https://i.imgur.com/wSdV47C.png)'
                  }}
                />
                <div style={{ padding: '0 1rem 1rem 1rem' }}>
                  <Typography use="headline6" tag="h2">
                    John Martinez
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
                  <CardActionButton onClick={() => openGit("https://github.com/Rasmarconi")} > github</CardActionButton>
                  <CardActionButton>email</CardActionButton>
                </CardActionButtons>

              </CardActions>
            </Card>
          </div>

      </div>


    </>
  )



}
