import {AboutMe} from './AboutMe/AboutMe'
import {MySkills} from './MySkills/MySkills'
import {MyApps} from './MyApps/MyApps'
import {HireMe} from "./HireMe/HireMe"
import {Contact} from "./Contact/Contact"
import {Footer} from "./Footer/Footer"
import {Nav} from "./Nav/Nav"
import {useTranslation} from "react-i18next"
import {LangType} from "store/main/main.types"
import * as React from "react"
import { Promo } from './Promo/Promo'
import { Container, ThemeProvider, createTheme } from '@mui/material'

type MainPropsType = {
  name: string
}

export const Main: React.FC<MainPropsType> = ({name}) => {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (language: LangType) => {
    i18n.changeLanguage(language)
  }

  const theme = createTheme({
    typography: {
      fontFamily: ['Exo 2', 'sans-serif'].join(','),
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#fff'
          }
        }
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            
          },
        }
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Nav handleChangeLanguage={handleChangeLanguage} />
      <Container 
        maxWidth={false}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 0,
          '@media (min-width: 600px)': {
            paddingLeft: 0,
            paddingRight: 0
          },
          position: 'relative',
          zIndex: 2
        }}
      >
        <Promo />
        <AboutMe/>
        <MyApps/>
        <MySkills/>
        {/* <Contact/> */}
        <Footer/>
      </Container>  
    </ThemeProvider>
  )
}