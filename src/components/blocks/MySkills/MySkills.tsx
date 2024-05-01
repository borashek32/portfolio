import s from "styles/Main.module.sass"
import {useSelector} from "react-redux"
import {NavLink} from "react-router-dom"
import {selectMySkills} from "components/blocks/MySkills/mySkills.selector"
import {Trans} from "react-i18next"
// @ts-ignore
import Flip from "react-reveal/Flip"
import { Box, Container, Typography } from "@mui/material"


export const MySkills = () => {

  const mySkills = useSelector(selectMySkills)

  const mappedMySkills = mySkills.apps.map(app => {

    const imgStyles = s.blockLogo + ' '
      + (app.header === "React" ? s.blockLogoReact
      : app.header === "Redux" ? s.blockLogoRedux : '')

    if (app.target) {
      return (
        <a
          key={app.id}
          href={app.link}
          className={s.navLinkClassSkills}
          target={"_blank"}
        >
          <div className={s.logoWrapper}>
            <img
              src={app.imgPath}
              alt={app.imgAlt}
              className={imgStyles}
            />
          </div>
          <h4 className={s.blockCardSectionsHeader}>{app.header}</h4>
        </a>
      )
    }

    return (
      <NavLink
        key={app.id}
        to={app.link}
        className={s.navLinkClassSkills}
      >
        <div className={s.logoWrapper}>
          <img
            src={app.imgPath}
            alt={app.imgAlt}
            className={imgStyles}
          />
        </div>
        <h4 className={s.blockCardSectionsHeader}>{app.header}</h4>
      </NavLink>
    )
  })

  return (
    <Container sx={{
      height: 'auto',
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#170550',
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
      id={mySkills.id}
    >
      <Flip>
        <Typography sx={{
            color: '#fff',
            fontSize: 40,
          }}
        >
          <Trans i18nKey={"mySkills.name"} />
        </Typography>
        <Box sx={{
          width: 240,
          height: 2,
          backgroundColor: '#fff',
          marginBottom: 8,
        }}
        ></Box>
      </Flip>
      <div className={s.blockFlex}>
        {mappedMySkills}
      </div>
    </Container>
  )
}
