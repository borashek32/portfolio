import * as React from 'react'
import {FC, useState} from 'react'
import styles from "./Nav.module.sass"
import {NavLink} from "react-router-dom"
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import {NavbarLink} from "../utils/NavbarLink"
import {createTheme, ThemeProvider} from "@mui/material"
import {useSelector} from "react-redux"
import {selectLinks} from "components/blocks/Nav/nav.selector"
import {SelectLang} from "components/blocks/Nav/SelectLang"
import {LangType} from "store/main/main.types"


type Props = {
  handleChangeLanguage: (language: LangType) => void
}

export const Nav: FC<Props> = ({handleChangeLanguage}) => {
  const links = useSelector(selectLinks)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [active, setActive] = useState(false)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
    setActive(true)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
    setActive(false)
  }

  const mappedLinks = links.map(link => {
    return (
      <Box key={link.href}>
        <NavbarLink
          onClose={handleCloseNavMenu}
          index={link.index}
          href={link.href}
          name={link.name}
        />
      </Box>
    )
  })


  function HomeIcon() {
    return (
      <Box sx={{
        marginLeft: '20px',
      }}>
        <img 
          src={require('./react.png')} 
          alt="react" 
          width='40px' 
        />
      </Box>
    )
  }

  const theme = createTheme({
    components: {
      MuiMenu: {
        styleOverrides: {
          root: {
            backgroundColor: '#170550',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '@media (max-width: 900px)': {
              overflow: "scroll"
            },
            color: '#fff'
          },
          paper: {
            color: '#fff !important',
            backgroundColor: "transparent !important",
            boxShadow: "none !important",
            top: "50% !important",
            left: "50% !important",
            margin: "-25% 0 0 -5% !important",
            textAlign: "center",
            overflow: "scroll",
            '@media (max-width: 900px)': {
              margin: "-25% 0 0 -10% !important"
            },
            '@media (max-width: 614px)': {
              margin: "-30% 0 0 -17% !important"
            }
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#170550',
            position: 'fixed',
            zIndex: 1000000
          }
        }
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Box sx={{
          display: "flex", 
          alignItems: "center", 
          justifyContent: 'space-between'
        }}>

          {/*burger*/}
          <Box
            className={active ? (styles.burger + ' ' + styles.active) : styles.burger}
            onClick={active ? handleCloseNavMenu : handleOpenNavMenu}
          >
            <span></span>
          </Box>

          {/*small navbar*/}
          <Box sx={{
            flexGrow: 1,
            display: {
              xs: 'flex', 
              md: 'none'
            },
            padding: "20px",
            justifyContent: "space-between"
          }}>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none'
                }, 
                margin: 0, 
                background: "#020024FF",
                backgroundImage: "linear-gradient(to right, #0f0c29, #302b63, #24243e)"
              }}
            >
              {mappedLinks}
            </Menu>
          </Box>

          {/*big navbar*/}
          <Box sx={{
            height: '70px', 
            alignItems: 'center', 
            justifyContent: "right", 
            display: {
              xs: 'none', 
              md: 'flex'
            }
          }}>

            {/*home icon*/}
            <NavLink to="#aboutMe">
              <HomeIcon />
            </NavLink>

            {mappedLinks}
          </Box>

          <SelectLang handleChangeLanguage={handleChangeLanguage}/>
        </Box>
      </AppBar>
    </ThemeProvider>
  )
}