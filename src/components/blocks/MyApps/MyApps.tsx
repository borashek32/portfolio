import {CardApp} from "./CardApp"
import {useSelector} from "react-redux"
import {selectMyApps} from "components/blocks/MyApps/myApps.selector"
import {Trans} from "react-i18next"
// @ts-ignore
import Flip from "react-reveal/Flip"
import { Box, Container, Typography } from '@mui/material'


export const MyApps = () => {
  const myApps = useSelector(selectMyApps)

  const mappedMyApps = myApps.apps.map(app => {
    return (
      <CardApp
        id={app.id}
        index={app.index}
        key={app.id}
        link={app.link}
        header={app.header}
        imgPath={app.imgPath}
        imgAlt={app.imgAlt}
        desc={app.desc}
        target={app.target}
        gh={app.gh}
      />
    )
  })

  return (
    <Container sx={{
      height: 'auto',
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#31065A',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      '@media (max-width: 1000px)': {
        
      },
      '@media (max-width: 840px)': {
        
      }
    }}
      maxWidth={false}
      id={myApps.id}
    >
      <Flip>
        <Typography sx={{
            color: '#fff',
            fontSize: 40,
          }}
        >
          <Trans i18nKey={"myApps.name"} />
        </Typography>
        <Box sx={{
          width: 240,
          height: 2,
          backgroundColor: '#fff',
          marginBottom: 8,
        }}
        ></Box>
      </Flip>
      <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 2,
        minWidth: '800px',
        '@media (max-width: 840px)': {
          minWidth: 'auto'
        },
      }}>
        {mappedMyApps}
      </Container>
      <div id={"mySkills"}></div>
    </Container>
  )
}
