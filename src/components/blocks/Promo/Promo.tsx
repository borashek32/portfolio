import { Box, Container, ImageListItem, Typography } from '@mui/material'
import { Trans } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectHireMe } from '../HireMe/hireMe.selector'
import { useState } from 'react'
import { selectLang } from '../Nav/nav.selector'
import Loader from "../utils/Loader" 
import Notification from '../utils/Notification'
import { ButtonDefault } from '../utils/ButtonDefault'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'

export const Promo = () => {
  const hireMe = useSelector(selectHireMe)
  const [loader, setLoader] = useState(false)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)

  const lang = useSelector(selectLang)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const downloadPDF = () => {
    try {
      setLoader(true)
      setError(false)
      setTimeout(() => {
        setLoader(false)
        setOpen(true)
      }, 1000)
    } catch {
      setError(true)
    }
  }

  return (
    <Container sx={{
      height: 'auto',
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: '60px',
      backgroundColor: '#31065A',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      '@media (max-width: 1000px)': {
        flexDirection: 'column',
      },
      '@media (max-width: 900px)': {
        
      },
      '@media (max-width: 500px)': {
        
      }
    }}
      maxWidth={false}
    >
      {loader && <Loader />}
      {(open || error) && <Notification
        text={open ? "CV downloaded successfully" : "Something went wrong. Please try later or contact me"}
        severity={open ? "success" : "error"}
        handleClose={handleClose}
        open={open || error}
      />}
      <Box>
        <Typography sx={{
          color: '#F86F03',
          fontSize: 30
        }}>
          <Trans i18nKey={"promo.subheaderTop"} />
        </Typography>
        <Typography sx={{
          fontSize: 60,
          '@media (max-width: 620px)': {
            fontSize: '40px'
          }
        }}>
          <Trans i18nKey={"promo.header"} />
        </Typography>
        <Box sx={{
          display: 'flex',
          gap: 2
        }}>
          <Typography sx={{
            fontSize: 35,
            '@media (max-width: 620px)': {
              fontSize: '20px'
            }
          }}>
            <Trans i18nKey={"promo.subheaderMiddle"} />
          </Typography>
          <Typography sx={{
            color: "#F86F03",
            fontSize: 35,
            fontWeight: 600,
            '@media (max-width: 620px)': {
              fontSize: '20px'
            }
          }}>
            <Trans i18nKey={"promo.frontendDev"} />
          </Typography>
        </Box>
        <Typography sx={{
          fontSize: 20
        }}>
          <Trans i18nKey={"promo.subheaderBottom"} />
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          alignItems: 'center',
          marginTop: 4,
          marginBottom: 4
        }}>
          <a href="https://www.linkedin.com/in/nataly-baranova-972952253/" target={'_blank'}>
            <LinkedInIcon fontSize='large' />
          </a>
          <a href="https://github.com/borashek32" target={'_blank'}>
            <GitHubIcon fontSize='large' />
          </a>
          <a 
            href="https://hh.ru/applicant/resumes?hhtmFrom=settings&hhtmFromLabel=header" 
            target={'_blank'}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '2px',
              backgroundColor: '#76ecfa',
              width: '26px',
              height: '26px',
              '&:hover': {
                backgroundColor: '#5cd2df'
              }
            }}>
              <Typography sx={{
                fontWeight: 900,
                color: '#31065A',
                fontSize: 20
              }}>
                hh
              </Typography>
            </Box>
          </a>
          <a href="#" target={'_blank'}>
            <FacebookIcon fontSize='large' />
          </a>
        </Box>
        <Box>
          <a 
            href={
              lang === 'ru' ? './cv_rus.pdf' : lang === 'en' ? './cv_eng.pdf' : './cv_esp.pdf'
            } 
            download
          >
            <ButtonDefault  
              name={"Download CV"}     
              type={"button"} 
              callback={downloadPDF} 
            />
          </a>
        </Box>
      </Box>
      <ImageListItem sx={{
        '@media (max-width: 1200px)': {
          width: '400px'
        },
        '@media (max-width: 500px)': {
          width: '250px'
        }
      }}>
        <img src={require('./promo.png')} alt="promo" />
      </ImageListItem>
    </Container>
  )
}