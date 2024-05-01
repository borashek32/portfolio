import { CardApp } from "./CardApp"
import { useSelector } from "react-redux"
import { selectMyApps } from "components/blocks/MyApps/myApps.selector"
import { Container } from '@mui/material'
import { Header } from "../utils/Header"
import { AppContainer } from "../utils/AppContainer"


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
    <AppContainer
      id={myApps.id}
      bgColor="#31065A"
    >
      <Header
        title='myApps.my'
        titleOtherColor='myApps.projects'
      />
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
    </AppContainer>
  )
}
